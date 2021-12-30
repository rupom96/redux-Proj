import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';


const AdminRoute = ({ children, ...rest }) => {
    const { user, loading, admin } = useAuth();

    if (loading) {
        return (
            <div className="mt-5 pt-5">
                <Spinner animation="border" variant="success" />
            </div>
        )
    }
    else if (!admin) {
        return (
            <div className="mt-5 pt-5">
                <h1 className="text-danger">You have to be an ADMIN to visit this page!</h1>
                <h4 className=""><a href="/home">Go to home</a></h4>
                <h4 className="text-success mt-5">If you are an admin, please wait....</h4>
            </div>
        )

    }

    return (
        <Route
            {...rest}
            render={({ location }) => user.displayName && admin ? (children) :
                (<Redirect to={{
                    pathname: "/login",
                    state: { from: location }
                }}
                >

                </Redirect>)


            }

        >

        </Route>
    );
};

export default AdminRoute;