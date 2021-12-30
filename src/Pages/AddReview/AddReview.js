import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddReview.css';
import { HashLink } from 'react-router-hash-link';

import useAuth from '../../hooks/useAuth';


const AddReview = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();
    const onSubmit = data => {
        //the whole object is printing    
        console.log(data);

        axios.post('https://immense-thicket-22974.herokuapp.com/reviews', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Review added successfully');
                    reset();
                }

            })

    }

    return (
        <div className="add-review">
            <h1 className="mt-4 mb-5 pb-3">Give a review: </h1>

            <form className="container text-start w-75" onSubmit={handleSubmit(onSubmit)}>
                <h6> User name: </h6>
                <input defaultValue={user?.displayName} {...register("u_name", { required: true })} className="form-control" placeholder="User Name" />

                <h6> User Email: </h6>
                <input defaultValue={user?.email} {...register("u_email", { required: true })} className="form-control" placeholder="User Email" />


                <h6> Your Review: </h6>
                <textarea {...register("opinion", { required: true })} className="form-control" rows="6" placeholder="Review" />


                <h6> Your rating of our service (out of 5): </h6>
                <input max="5" min="0" type="number" {...register("rating", { required: true })} className="form-control" placeholder="Rating" />


                <input className="btn btn-primary" type="submit" value="Post the review" />
            </form>

            <div className="mt-3 container">
                {/* <h5> Done giving review? <Link to="/reviews">Check out others' reviews</Link> </h5> */}
                <h5> Done giving review? <HashLink to="/home/#reviewsid">Check what others' have to say</HashLink> </h5>
            </div>



        </div>
    );
};

export default AddReview;