import React from 'react';
import useOrder from '../../hooks/useOrder';
// import ManageOrder from '../ManageOrder/ManageOrder';
// import { HashLink } from 'react-router-hash-link';
import ManageOrder from '../ManageOrder/ManageOrder';
import { Link } from 'react-router-dom';


const ManageOrders = () => {


    const [order] = useOrder();


    const afterClickDelete = () => {
        // setOrder(remainingOrders);
        window.location.reload();

    };

    const afterClickApprove = () => {

        window.location.reload();

    }

    return (
        <div className="mt-4">
            <h1>All ordered products:</h1>

            {order.length === 0 &&

                <h5 className="mt-5 text-danger">Maybe no one haven't placed any order yet! If have, we are fetching your data, please wait...</h5>
            }
            <div className="mt-3">
                <h5> Want to order more products? <Link to="/moreBikes">Click Here to go to Products</Link> </h5>
                {/* <h5> Want to order more products? <HashLink to="/home#productsid">Click Here to go to Products</HashLink> </h5> */}
            </div>

            <div className="card-container px-5 mt-5">

                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {/* per order card will be set here */}
                    {
                        order.map(data =>
                            <ManageOrder
                                key={data._id}
                                order={data}
                                afterClickDelete={afterClickDelete}
                                afterClickApprove={afterClickApprove}
                            ></ManageOrder>)
                    }


                </div>

            </div>

        </div>
    );
};

export default ManageOrders;