import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Manu() {
    return (
        <div>
            <div className="container">


                <Navbar bg="light" expand="lg">
                    <Container fluid>
                        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Link to="/"></Link>
                                <Link to="/home">Home</Link>
                                <Link to="/about">Link</Link>
                                
                            </Nav>

                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
    )
}
