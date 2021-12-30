import React from 'react';
// import useOrder from '../../hooks/useOrder';
// import './ManagePackage.css';

const ManageOrder = (props) => {
    const { _id, user_name, user_email, product_name, product_cost, status } = props.order;

    const { afterClickDelete, afterClickApprove } = props;

    // const [order] = useOrder();

    const clickApprove = id => {

        const proceed = window.confirm('Are you sure about SHIPPING the order? (press OK to confirm)');
        if (proceed) {
            const url = `https://immense-thicket-22974.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'PUT'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        alert('The order has been shipped!');
                        afterClickApprove();
                    }
                }
                )
        }


    }

    const clickDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete? (press OK to confirm)');
        if (proceed) {
            const url = `https://immense-thicket-22974.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted successfully');
                        // const remainingOrders = order.filter(ord => ord._id !== id);
                        // afterClickDelete(remainingOrders);
                        afterClickDelete();

                    }
                })
        }


    }


    return (
        <div>

            <div className="col h-100">
                <div className="card h-100">

                    <div className="card-body">
                        <h5 className="card-title">Order No: {_id}</h5>

                        <div className="text-start pt-4">
                            <p className="card-text"> Ordered by: {user_name}</p>
                            <p className="card-text"> Client Email: {user_email}</p>
                            <p className="card-text"> Product Name: {product_name}</p>
                            <p className="card-text"> Product Price: {product_cost}</p>
                            <p className="card-text"> Status: {status}</p>
                        </div>

                    </div>
                    <div className="card-footer">
                        <div className="d-grid gap-2">



                            <div className="d-flex justify-content-evenly w-100">
                                {/* if status is pending */}
                                {status === "Shipped" ?
                                    <button className="btn btn-success" type="button" disabled>Shipped!</button>
                                    :
                                    <button onClick={() => clickApprove(_id)} className="btn btn-success" type="button">Ship Now</button>
                                }

                                <button onClick={() => clickDelete(_id)} className="btn btn-danger" type="button">Delete</button></div>


                            {/* <Link to={`/details/${_id}`}>
                                <button className="btn btn-primary" type="button">Go to Details</button>
                            </Link> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default ManageOrder;