import React from 'react';
// import { Button, Card } from 'react-bootstrap';

import useReviews from '../../../hooks/useReviews';
import Review from './Review';
// import HomeBike from '../HomeBike/HomeBike';

const Reviews = () => {
    // const [data] = useData();
    const [reviews] = useReviews();


    const handleClickService = () => {

    }

    return (
        <div className="container mt-5 px-5">
            <h1 id="reviewsid">Reviews:</h1>
            <div className="card-container px-5 mt-5">

                {reviews.length === 0 &&

                    <div className="d-flex justify-content-center mt-5 mb-5">
                        <div className="spinner-border text-danger" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                }

                <div className="row row-cols-1 row-cols-md-4 g-4">
                    {/* per card will be set here */}
                    {
                        reviews.map(data =>
                            <Review
                                key={data._id}
                                reviews={data}
                                handleClickService={handleClickService}
                            ></Review>)
                    }


                </div>

            </div>

        </div>
    );
};

export default Reviews;