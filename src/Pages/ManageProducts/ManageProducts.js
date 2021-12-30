import React from 'react';

// import useAuth from '../../hooks/useAuth';

import { Link } from 'react-router-dom';
import ManageProduct from '../ManageProduct/ManageProduct';
import useData from '../../hooks/useData';

const ManageProducts = () => {
    const [data] = useData();


    const afterClickDelete = () => {

        window.location.reload();

    }



    return (
        <div className="mt-4">
            <h1>Manage products:</h1>

            {data.length === 0 &&

                <h5 className="mt-5 text-danger"> please wait...</h5>
            }
            <div className="mt-3">
                <h5> Want to add products? <Link to="/dashboard/addProduct">Click Here</Link> </h5>
                {/* <h5> Want to order more products? <HashLink to="/home#productsid">Click Here to go to Products</HashLink> </h5> */}
            </div>

            <div className="card-container px-5 mt-5">

                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {/* per order card will be set here */}
                    {
                        data.map(data =>
                            <ManageProduct
                                key={data._id}
                                product={data}
                                afterClickDelete={afterClickDelete}
                            ></ManageProduct>)
                    }


                </div>

            </div>

        </div>
    );
};

export default ManageProducts;