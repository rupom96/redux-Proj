import React from 'react';

const Contact = () => {
    return (
        <div className="mt-5">
            <h1>Get in Touch:</h1>
            <div className="text-start px-3 container">

                <div className="w-75">
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                </div>

                <form className="row g-3">
                    <div className="col-auto">
                        <label htmlFor="inputPassword2" className="form-label">First Name</label>
                        <input type="text" className="form-control" id="inputPassword2" placeholder="Mr. Name" />
                    </div>
                    <div className="col-auto">
                        <label htmlFor="inputPassword2" className="form-label">Last Name</label>
                        <input type="text" className="form-control" id="inputPassword2" placeholder="Last Name" />
                    </div>
                    <div className="col-auto">
                        <label htmlFor="inputPassword2" className="form-label">Phone Number</label>
                        <input type="text" className="form-control" id="inputPassword2" placeholder="0121******" />
                    </div>

                </form>


                <div className="mb-3 mt-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Your Messege</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
                <div className="col-auto">
                    <button type="submit" className="btn btn-primary mb-3">Send Message</button>
                </div>
            </div>


            <div className="container w-75 mt-5">
                <div className="row">
                    <div className="col-sm-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Our Phone Number</h5>
                                <p className="card-text">01713301465, 01942711175, 01942722175</p>
                            </div>
                        </div>

                    </div>
                    <div className="col-sm-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Our Email Address</h5>
                                <p className="card-text">rupom.cse16@gmail.com, rupom_cse16@yahoo.com</p>
                            </div>
                        </div>

                    </div>
                    <div className="col-sm-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Our Location</h5>
                                <p className="card-text">Eastern Housing Pallabi, Mirpur, Dhaka</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Contact;