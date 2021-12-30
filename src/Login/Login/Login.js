import React from 'react';

import useAuth from '../../hooks/useAuth';
import { useHistory, useLocation } from "react-router";
import { useState } from 'react';

import { Link } from 'react-router-dom';



const Login = () => {
    // const [error, setError] = useState('');
    const { loginUser, loading, error, setError } = useAuth();


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const location = useLocation();
    const history = useHistory();



    const handleEmail = e => {
        setEmail(e.target.value);
        console.log(email);
    }
    const handlePassword = e => {
        setPassword(e.target.value);
    }


    const processLogin = e => {

        loginUser(email, password, location, history)
            ;
        e.preventDefault();

    }

    //this function is to reset error field while jumping to registration route 
    const SetErrorNull = () => {
        setError('');
    }

    return (
        <div className="mt-5 pt-5">
            <h2 className="mb-5">Please Login</h2>


            <div className="text-start px-3 container">




                {!loading && <form onSubmit={processLogin} className="row g-3 mb-3 mt-5">

                    {/* email address */}
                    <div className="w-50 container">
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                            <input onBlur={handleEmail} type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" required />
                        </div>
                    </div>
                    <br />
                    {/* password */}
                    <div className="w-50">
                        <label htmlFor="inputPassword2" className="form-label">Password</label>
                        <input onBlur={handlePassword} type="password" className="form-control" id="inputPassword2" placeholder="Password" required />
                    </div>

                    {/* Submit button */}

                    <div className="col-auto mt-3">
                        <button type="submit" className="btn btn-primary mb-3">Login</button>
                    </div>



                </form>}


            </div>

            {/* error message */}

            <h5 className="container text-center mt-5 text-danger">{error}</h5>

            {loading && <div className="spinner-border"></div>}
            {/* {user?.email && alert('User logged in successfully!')} */}

            <h5 className="my-3">New Here? <Link onClick={SetErrorNull} style={{ color: "blue", textDecoration: "underline" }} to="/register">Register Here</Link> </h5>




            <div>-------------------------</div>
            {/* 
            <br /><br /><br />
            <p>OR</p>
            <button onClick={handleGoogleLog} className="btn btn-primary btn-lg p-3">Google Sign In</button> */}


        </div>
    );
};

export default Login;

