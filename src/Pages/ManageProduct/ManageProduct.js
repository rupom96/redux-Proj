import React from 'react';
// import useOrder from '../../hooks/useOrder';
// import './MyPackage.css';

const ManageProduct = (props) => {
    const { name, s_details, image, _id } = props.product;

    const { afterClickDelete } = props;

    // const [order, setOrder] = useOrder();

    const clickDelete = id => {
        const proceed = window.confirm('Are you sure about deleting your order? (press OK to delete)');
        if (proceed) {
            const url = `https://immense-thicket-22974.herokuapp.com/bikes/${id}`;
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

                    <img src={image} className="card-img-top service-img" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{s_details}</p>
                    </div>

                    <div className="card-footer">
                        <div className="d-grid gap-2">

                            {/* delete button */}

                            <button onClick={() => clickDelete(_id)} className="btn btn-danger" type="button">Delete Product</button></div>


                        {/* <Link to={`/details/${_id}`}>
                                <button className="btn btn-primary" type="button">Go to Details</button>
                            </Link> */}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ManageProduct;