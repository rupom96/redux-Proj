import { useParams, useHistory } from 'react-router';
import { React } from 'react';
import useData from '../../hooks/useData';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import axios from 'axios';




const Details = () => {
    const { user } = useAuth();

    const { productId } = useParams();
    const [data] = useData();
    let found = data?.find(e => e._id === productId);

    // const location = useLocation();
    const history = useHistory();
    // const redir_uri = location.state?.from || '/home';
    const redir_uri = '/dashboard/myOrders';

    const { register, handleSubmit, reset } = useForm();


    const onSubmit = data => {

        createDoc(user, data, found);
        reset();


    }
    const createDoc = (user, data, found) => {
        console.log(user, data, found);

        const doc = {
            user_id: user.uid,
            user_name: data.u_name,
            user_email: data.u_email,
            product_name: found.name,
            product_id: found._id,
            product_cost: found.price,
            status: "Pending",

        }
        console.log(doc);
        // axios.post('')
        axios.post('https://immense-thicket-22974.herokuapp.com/orders', doc)
            .then(res => {
                if (res.data.insertedId) {
                    alert('This bike has been Ordered successfully');
                    history.push(redir_uri);

                }

            })


    }




    return (
        <div className="mt-5 pt-5">


            <h1> Details:</h1>

            <img src={found?.image} className="w-50 mt-3" alt="..." />
            <h4 className="mt-3">{found?.name}</h4>
            <p className="text-start container px-5 mt-3">{found?.s_details}</p>
            <div className="text-start container px-5">
                <p>{found?.details}</p>
                <p>Price: {found?.price}</p>
            </div>


            <div>

                {/* <h4>user details:</h4> */}
                <div className="container">
                    <h4 className="mt-5 mb-5 pb-3">Provide necessary info to book the package:</h4>

                    <form className="container text-start w-75" onSubmit={handleSubmit(onSubmit)}>
                        <h6> User Name: </h6>
                        <input defaultValue={user?.displayName} {...register("u_name", { required: true })} className="form-control mb-3" placeholder="User Name" />

                        <h6> Email: </h6>
                        <input defaultValue={user?.email} {...register("u_email", { required: true })} className="form-control mb-3" placeholder="User email" />

                        <h6> Address: </h6>
                        <textarea {...register("u_address", { required: true })} className="form-control mb-3" rows="3" placeholder="user address" />

                        <h6>Phone No.: </h6>
                        <input type="number" {...register("u_phone", { required: true })} className="form-control mb-3" placeholder="user phone no." />

                        <br />

                        <input className="btn btn-primary btn-lg" type="submit" value="Purchase this Bike" />
                    </form>



                </div>


            </div>

            {/* <button className="btn btn-primary btn-lg" type="button">Add the trip package</button> */}

        </div>
    );
};

export default Details;
