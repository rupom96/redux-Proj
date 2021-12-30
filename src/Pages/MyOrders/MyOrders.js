import React from 'react';

import useAuth from '../../hooks/useAuth';
import useOrder from '../../hooks/useOrder';
// import MyPackage from '../MyPackage/MyOrder';
// import { HashLink } from 'react-router-hash-link';
import MyOrder from '../MyOrder/MyOrder';
import { Link } from 'react-router-dom';

const MyPackages = () => {
    const [order] = useOrder();
    const { user } = useAuth();

    const afterClickDelete = () => {
        // setOrder(remainingOrders);
        window.location.reload();

    }

    let myOrders = order?.filter(e => e.user_id === user.uid);
    console.log(myOrders);

    return (
        <div className="mt-4">
            <h1>My ordered products:</h1>

            {myOrders.length === 0 &&

                <h5 className="mt-5 text-danger">Maybe you haven't placed any order yet! If you have, please wait...</h5>
            }
            <div className="mt-3">
                <h5> Want to order more products? <Link to="/moreBikes">Click Here to go to Products</Link> </h5>
                {/* <h5> Want to order more products? <HashLink to="/home#productsid">Click Here to go to Products</HashLink> </h5> */}
            </div>

            <div className="card-container px-5 mt-5">

                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {/* per order card will be set here */}
                    {
                        myOrders.map(data =>
                            <MyOrder
                                key={data._id}
                                myorder={data}
                                afterClickDelete={afterClickDelete}
                            ></MyOrder>)
                    }


                </div>

            </div>

        </div>
    );
};

export default MyPackages;