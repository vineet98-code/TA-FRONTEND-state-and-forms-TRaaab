import React from 'react';
import { useFormik } from 'formik'

const FormValidation = () => {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: (values) => {
            console.log(values);
        },
        validate: (values) => {
            //values.email values.password
            //error.email error.password
            //error.name = 'This is required'

            let errors = {} // object defined by formik 
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/i.test(values.email)) {
                errors.email = 'Invalid email format';
            }
            if (!values.password) {
                errors.password = 'Required';
            }
            return errors;
        }
    })
    // console.log(formik.values);
    // console.log(formik.errors);
    console.log('visited field', formik.touched);

    return (
        <form className="container my-5" onSubmit={formik.handleSubmit}>
            <div className="mb-3">
                {/* htmlFor is value of id attribute for the corresponding input element */}
                <label htmlFor="email" className="form-label d-flex flex-row">Email address</label>
                <input 
                type="email" 
                className="form-control" 
                id="email" 
                name="email" 
                onChange={formik.handleChange} 
                onBlur={formik.handleBlur}
                value={formik.values.email} 
                placeholder="name@example.com" />

                {formik.touched.email && formik.errors.email ? (
                    <div className="error-message d-flex flex-row">{formik.errors.email}</div>
                ) : null}
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label d-flex flex-row">password</label>
                <input 
                className="form-control" 
                id="password" 
                name="password" 
                onChange={formik.handleChange} 
                onBlur={formik.handleBlur}
                
                value={formik.values.password} 
                placeholder="password" />

                {formik.touched.password && formik.errors.password ? (
                       <div className="error-message d-flex flex-row">{formik.errors.password}</div> 
                ) : null}
            </div>
            <div className="col-12">
                <button className="btn btn-primary" type="submit">Submit form</button>
            </div>
        </form>
    )
};

export default FormValidation;
