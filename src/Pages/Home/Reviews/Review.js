import React from 'react';
import './Review.css';
import Rating from 'react-rating';


const Review = (props) => {
    const { u_name, u_email, opinion, rating, _id } = props.reviews;
    return (
        <div>
            <div className="col h-100">
                <div className="card h-100">
                    {/* <div className="card-head">
                        <h5 className="card-title">{u_name}</h5>
                        <p className="card-text">{u_email}</p>
                        <hr />
                    </div> */}

                    <div className="card-body">
                        <h5 className="card-title">{u_name}</h5>
                        <p className="card-text">{u_email}</p>
                        <hr />

                        <p className=" mt-4 card-text text-start ">Review: <span className="text-muted fw-bold fst-italic"> "{opinion}"</span></p>
                    </div>
                    {/* <div className="card-footer"> */}
                    <div className="">
                        {/* dynamic rating */}
                        <hr />
                        <p className=" mt-2 mb-3 card-text">Rating: <Rating
                            readonly
                            initialRating={rating}
                            emptySymbol="far fa-star icon-color"
                            fullSymbol="fas fa-star icon-color"></Rating></p>
                    </div>
                    {/* </div> */}
                </div>
            </div>

        </div>
    );
};

export default Review;