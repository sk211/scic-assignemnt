import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import useAuth from "../../hooks/useAuth";
import './Manu.css'

export default function Manu() {
    const { user, logOut } = useAuth();
    return (
        <div>
            <div className="container" id="manu">


                <Navbar expand="lg">
                    <Container fluid>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="mx-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Link to="/"></Link>
                                <Link to="/home">Home</Link>
<<<<<<< HEAD
                                <Link to="/about">About</Link>
                                <Link to="/cart">Cart</Link>
                                <Link to="/shop">Shop</Link>
                                <Link to="/dashboard">Dashboard</Link>
                                <Link to="/login">Login</Link>
                                <Link to="/regester">Regester</Link>
                                <span className="text-light">{user.email}</span>
                                {user?.email && (
                                    <button className="btn btn-sm btn-warning">
                                        <Link to="/dashboard">Dashboard</Link>
                                    </button>
                                )}
                                {user?.email && (
                                    <button className="btn btn-sm btn-danger" onClick={logOut}>
                                        Logout
                                    </button>
                                )}


=======
                                <Link to="/about">Link</Link>
                                
>>>>>>> acccfdb445f9f8699c4673302598ddd7a365d6ad
                            </Nav>

                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
    )
}
