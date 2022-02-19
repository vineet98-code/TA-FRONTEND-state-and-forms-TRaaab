import React from 'react';

const OneStep = () => {
    return (
        <div className="container my-3">
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="..." className="img-fluid rounded-start" alt="" />
                    </div>

                    <form className="row g-3">
                        <h1 className="d-flex justify-content-start">Sign Up</h1>
                        <div className="col-md-6">
                            <label for="inputEmail4" className="form-label d-flex flex-row">First Name</label>
                            <input type="email" className="form-control" id="inputEmail4" />
                        </div>
                        <div className="col-md-6">
                            <label for="inputPassword4" className="form-label d-flex flex-row">Last Name</label>
                            <input type="password" className="form-control" id="inputPassword4" />
                        </div>
                        <div className="col-md-6">
                            <label for="inputEmail4" className="form-label d-flex flex-row">Date of Birth</label>
                            <input type="email" className="form-control" id="inputEmail4" />
                        </div>
                        <div className="col-md-6">
                            <label for="inputPassword4" className="form-label d-flex flex-row">Email Address</label>
                            <input type="password" className="form-control" id="inputPassword4" />
                        </div>
                        <div className="col-12">
                            <label for="inputAddress" className="form-label d-flex flex-row">Address</label>
                            <input type="text" className="form-control d-flex flex-row" id="inputAddress" placeholder="1234 Main St" />
                        </div>

                        <div className="col-12 d-flex justify-content-end">
                            <button type="submit" className="btn btn-primary">Next Step</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
};

export default OneStep;
