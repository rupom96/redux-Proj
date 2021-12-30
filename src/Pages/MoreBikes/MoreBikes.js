import React from 'react';
import useData from '../../hooks/useData';
import MoreBike from './MoreBike';

const MoreBikes = () => {
    const [data] = useData();

    const handleClickService = () => {

    }

    return (
        <div className="mt-5 pt-5">
            <h1 id="allbikesid">All of Our Bikes:</h1>
            <div className="card-container px-5 mt-5">

                {data.length === 0 &&

                    <div class="d-flex justify-content-center mt-5 mb-5">
                        <div class="spinner-border text-danger" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>
                }

                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {/* per card will be set here */}
                    {
                        data.map(data =>
                            <MoreBike
                                key={data._id}
                                product={data}
                                handleClickService={handleClickService}
                            ></MoreBike>)
                    }


                </div>

            </div>

        </div>
    );
};


export default MoreBikes;