import React from 'react';
import { useFormik } from 'formik'

const ShippingAddress = () => {

    const formik = useFormik({
        initialValues: {
            address: "",
            zipPostal: "",
            city: "",
            country: ""
        },
        onSubmit: (values) => {
            console.log(values);
        },
        validate: (values) => {
            //values.email values.password
            //error.email error.password
            //error.name = 'This is required'

            let errors = {} // object defined by formik 
            if (!values.address) {
                errors.address = 'Required';
            } 
            if (!values.zipPostal) {
                errors.zipPostal = 'Required';
            } else if (isNaN(values.zipPostal)) {
                errors.zipPostal = 'Invalid ZipPostal format';
            } else {
                errors.zipPostal = "";
            }
            if (!values.city) {
                errors.city = 'Required';
            }
            if (!values.country) {
                errors.country = 'Required';
            }
            return errors;
        }
    })
    return (
        
        <form className="container  border border-info border-5 p-3  my-5" onSubmit={formik.handleSubmit}>
            <h2 className="d-flex flex-row link-info">ShippingAddress</h2>
            <div className="mb-3">
                {/* htmlFor is value of id attribute for the corresponding input element */}
                <label htmlFor="address" className="form-label d-flex flex-row">Address</label>
                <input
                    type="address"
                    className="form-control"
                    id="address"
                    name="address"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.address}
                    placeholder="e.g New Delhi Vasant Vihar" />

                {formik.touched.address && formik.errors.address ? (
                    <div className="error-message d-flex flex-row">{formik.errors.address}</div>
                ) : null}
            </div>
            <div className="mb-3">
                <label htmlFor="zipPostal" className="form-label d-flex flex-row">ZipPostal</label>
                <input
                    className="form-control"
                    id="zipPostal"
                    name="zipPostal"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}

                    value={formik.values.zipPostal}
                    placeholder="e.g. 176057" />

                {formik.touched.zipPostal && formik.errors.zipPostal ? (
                    <div className="error-message d-flex flex-row">{formik.errors.zipPostal}</div>
                ) : null}
            </div>
            <div className="mb-3">
                <label htmlFor="city" className="form-label d-flex flex-row">City</label>
                <input
                    className="form-control"
                    id="city"
                    name="city"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}

                    value={formik.values.city}
                    placeholder="e.g. New Delhi" />

                {formik.touched.city && formik.errors.city ? (
                    <div className="error-message d-flex flex-row">{formik.errors.city}</div>
                ) : null}
            </div>
            <div className="mb-3">
                <label htmlFor="country" className="form-label d-flex flex-row">Country</label>
                <input
                    className="form-control"
                    id="country"
                    name="country"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}

                    value={formik.values.country}
                    placeholder="e.g. India" />

                {formik.touched.country && formik.errors.country ? (
                    <div className="error-message d-flex flex-row">{formik.errors.country}</div>
                ) : null}
            </div>
            
        </form>
    )
};

export default ShippingAddress;
