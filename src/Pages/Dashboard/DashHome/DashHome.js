import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const DashHome = () => {
    const { user } = useAuth();

    return (
        <div className="mt-4">
            <h4 >Hello {user.displayName}, </h4>
            <h1>Welcome to your personal Dashboard!</h1>

            <div className="w-75 container">
                <h5 className="mt-5 pt-5">You can manage your works in this dashboard through navigating the side navigation-bar on the left side of your sceen. If the sidebar is collapsed, click the sidebar menu-icon button at the top-left corner of your screen to expand. Have a good day!</h5>


                <h6 className="mt-5 pt-5 text-danger">Want to exit dashboard and go back to home? <Link to='/home'> Click Here!</Link></h6>
            </div>
        </div >
    );
};

export default DashHome;