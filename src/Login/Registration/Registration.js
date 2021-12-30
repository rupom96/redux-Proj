import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useHistory } from "react-router";
import useAuth from '../../hooks/useAuth';

const Registration = () => {


    const { registerUser, loading, error, setError } = useAuth();



    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [error, setError] = useState('');
    const history = useHistory();




    const clickReg = e => {
        console.log(name, email, password);

        registerUser(email, password, history, name);

        e.preventDefault();

    }



    const handleName = e => {
        setName(e.target.value);
    }
    const handleEmail = e => {
        setEmail(e.target.value);
    }
    const handlePassword = e => {
        setPassword(e.target.value)
    }

    //this function is to reset error field while jumping to registration route 
    const SetErrorNull = () => {
        setError('');
    }



    return (

        <div className="mt-5 pt-5">
            <h2 className="mb-5">Please Register</h2>

            {loading && <div className="container text-center mt-5 spinner-border"></div>}

            <div className="text-start px-3 container">




                {!loading && <form onSubmit={clickReg} className="row g-3 mb-2">
                    {/* name */}
                    <div className="w-50">
                        <label htmlFor="inputPassword2" className="form-label">Full Name</label>
                        <input onBlur={handleName} type="text" className="form-control" id="inputPassword2" placeholder="Mr. Name" required />
                    </div>

                    {/* email address */}
                    <div className="w-50">
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                            <input onBlur={handleEmail} type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" required />
                        </div>
                    </div>

                    {/* password */}
                    <div className="w-50">
                        <label htmlFor="inputPassword2" className="form-label">Password</label>
                        <input onBlur={handlePassword} type="password" className="form-control" id="inputPassword2" placeholder="Password" required />
                    </div>


                    {/* submit button */}
                    <div className=" mt-3">
                        <button type="submit" className="btn btn-primary mb-3">Register</button>
                    </div>

                    {/* error message */}

                    {/* <div className="row mt-2 text-danger">{error}</div> */}
                </form>}

                <h5 className="container text-center mt-5 text-danger">{error}</h5>





            </div>

            <h5 className="my-3">Alreay Registered? <Link onClick={SetErrorNull} style={{ color: "blue", textDecoration: "underline" }} to="/login">Login here</Link> </h5>


            <div>-------------------------</div>

            {/* <br /><br /><br />
            <p>OR</p>
            <button onClick={signInUsingGoogle} className="btn btn-primary">Google Sign In</button> */}
        </div>

    );
};

export default Registration;