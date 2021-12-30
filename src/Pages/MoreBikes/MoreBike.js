import React from 'react';
import { Link } from 'react-router-dom';

const MoreBike = (props) => {
    const { name, s_details, image, _id } = props.product;
    return (
        <div>
            <div className="col h-100">
                <div className="card h-100">
                    <img src={image} className="card-img-top service-img" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{s_details}</p>
                    </div>
                    <div className="card-footer">
                        <div className="d-grid gap-2">
                            <Link to={`/details/${_id}`}>
                                <button className="btn btn-primary" type="button">Purchase Details</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};


export default MoreBike;