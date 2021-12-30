import React from 'react';
import { Link } from 'react-router-dom';
import ManageProducts from '../ManageProducts/ManageProducts';
import './Dashboard.css';

import {
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";
import useUser from '../../hooks/useUser';
import useAuth from '../../hooks/useAuth';
import DashHome from './DashHome/DashHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import ManageOrders from '../ManageOrders/ManageOrders';
import AddProduct from '../AddProduct/AddProduct';
import PrivateRoute from '../../Login/PrivateRoute/PrivateRoute';

import MyOrders from '../MyOrders/MyOrders';
import AddReview from '../AddReview/AddReview';
import Pay from '../Pay/Pay';



const Dashboard = () => {

    let { path, url } = useRouteMatch();



    const { user, logOut } = useAuth();

    console.log(user);
    const [mongoUser] = useUser();
    const fireUserEmail = user?.email;
    let found = mongoUser?.find(e => e.email === fireUserEmail);
    console.log(found);


    const togle = () => {
        let el = document.getElementById("wrapper");
        let toggleButton = document.getElementById("menu-toggle");

        toggleButton.onclick = function () {
            el.classList.toggle("toggled");
        };
    }


    return (


        <div>
            <div className="d-flex mt-5 pt-3" id="wrapper">
                {/* <!-- Sidebar --> */}
                <div className="bg-white" id="sidebar-wrapper">

                    {/* Sidebar options and designs */}
                    <div className="list-group list-group-flush">

                        <a href={`${url}`} className="list-group-item list-group-item-action fw-bold text-info second-text bg-dark "><i
                            className="fas fa-tachometer-alt me-2"></i>DASHBOARD</a>


                        {/* user options */}

                        {(found?.role === 'Normal' || user.role === 'Normal') &&
                            <div>
                                <Link to={`${url}/myOrders`} className="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i
                                    className="fas fa-shopping-cart me-2"></i>My Orders</Link>

                                <Link to={`${url}/pay`} className="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i
                                    className="fas fa-money-check-alt me-2"></i>Pay</Link>

                                <Link to={`${url}/addReview`} className="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i
                                    className="fas fa-paperclip me-2"></i>Give Review</Link>

                                <button onClick={logOut} className="mt-3 list-group-item list-group-item-action bg-transparent text-danger fw-bold"><i
                                    className="fas fa-power-off me-2"></i>Logout</button>

                            </div>}

                        {/* Admin options */}

                        {found?.role === 'Admin' &&
                            <div>
                                <Link to={`${url}/manageOrders`} className="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i
                                    className="fas fa-shopping-cart me-2"></i>Manage All Orders</Link>

                                <Link to={`${url}/addProduct`} className="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i
                                    className="fas fa-gift me-2"></i>Add a new Product</Link>

                                <Link to={`${url}/manageProduct`} className="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i
                                    className="fas fa-gift me-2"></i>Manage Products</Link>

                                <Link to={`${url}/makeAdmin`} className="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i
                                    className="fas fa-gift me-2"></i>Make Admin</Link>

                                <button onClick={logOut} className="mt-3 list-group-item list-group-item-action bg-transparent text-danger fw-bold"><i
                                    className="fas fa-power-off me-2"></i>Logout</button>

                            </div>}

                    </div>
                </div>

                {/* <!-- /#sidebar-wrapper --> */}


                <div className="container" id="page-content-wrapper">
                    <div className="d-flex">
                        <button id="menu-toggle" onClick={togle} type="button" className="btn btn-dark"><i className="fas fa-bars py-2 px-1 fs-3 text-info" id="menu-toggle" onClick={togle} ></i></button>


                    </div>
                    {/* <!-- Page Content --> */}
                    <div className="container">

                        <Switch>

                            <Route exact path={path}>
                                <DashHome></DashHome>
                            </Route>

                            {/* user routes */}

                            <PrivateRoute path={`${path}/myOrders`}>
                                <MyOrders></MyOrders>
                            </PrivateRoute>
                            <PrivateRoute path={`${path}/addReview`}>
                                <AddReview></AddReview>
                            </PrivateRoute>
                            <PrivateRoute path={`${path}/pay`}>
                                <Pay></Pay>
                            </PrivateRoute>


                            {/* admin routes */}

                            <AdminRoute path={`${path}/manageOrders`}>
                                <ManageOrders></ManageOrders>
                            </AdminRoute>

                            <AdminRoute path={`${path}/addProduct`}>
                                <AddProduct></AddProduct>
                            </AdminRoute>

                            <AdminRoute path={`${path}/manageProduct`}>
                                <ManageProducts></ManageProducts>
                            </AdminRoute>

                            <AdminRoute path={`${path}/makeAdmin`}>
                                <MakeAdmin></MakeAdmin>
                            </AdminRoute>


                        </Switch>
                    </div>

                </div>
            </div>
            {/* <!-- /#page-content-wrapper --> */}
        </div>
        // </div >
    );
};

export default Dashboard;