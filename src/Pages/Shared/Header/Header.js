
import React from 'react';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
// import { useEffect, useState } from 'react';
import useUser from '../../../hooks/useUser';

const Header = () => {

    const { user, logOut } = useAuth();

    console.log(user);

    const [mongoUser] = useUser();


    const fireUserEmail = user?.email;



    let found = mongoUser?.find(e => e.email === fireUserEmail);
    console.log(found);






    const navStyle = { fontWeight: "900", fontFamily: "Ubuntu" };
    const logoStyle = { color: "yellow", fontWeight: "900", fontFamily: "Kalam" };
    const signStyle = { color: "yellow", textDecoration: "underline", paddingLeft: "50px" };

    // const dashOptionStyle = { fontWeight: "900", fontFamily: "Ubuntu", marginBottom: "10px" };



    return (
        <div>

            <Navbar style={{ paddingTop: "10px", paddingBottom: "10px" }} collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
                <Container>
                    <Navbar.Brand style={logoStyle}
                        href="/home">BIKE-WALA</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link
                                style={navStyle}
                                as={Link} to="/home">Home</Nav.Link>

                            <Nav.Link
                                style={navStyle}
                                as={Link} to="/about">About Us</Nav.Link>

                            {/* <Nav.Link
                                style={navStyle}
                                as={Link} to="/career">Career</Nav.Link> */}

                            <Nav.Link
                                style={navStyle}
                                as={Link} to="/moreBikes">More Products</Nav.Link>


                            {/* ......making user dashboard dropdown ............*/}
                            {/* (found?.role === 'Normal' || user.role === 'Normal') */}
                            {(found?.role === 'Normal' || user.role === 'Normal') &&
                                <Nav.Link
                                    style={navStyle}
                                    as={Link} to="/dashboard">User Dashboard</Nav.Link>
                            }

                            {/* .........making admin dashboard dropdown ........*/}
                            {/* !admin */}
                            {found?.role === 'Admin' &&
                                <Nav.Link
                                    style={navStyle}
                                    as={Link} to="/dashboard">Admin Dashboard</Nav.Link>
                            }



                            {user?.email ?

                                < button onClick={logOut} className="btn btn-primary">Logout</button>
                                :
                                <Nav.Link style={navStyle}
                                    as={Link} to="/login">Login</Nav.Link>}

                            {user?.email &&
                                <Navbar.Text style={signStyle}>
                                    Signed as: {user?.displayName}
                                </Navbar.Text>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>



        </div >
    );
};

export default Header;