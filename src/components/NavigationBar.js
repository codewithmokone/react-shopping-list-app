import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { RiShoppingCartFill, RiFileList3Line } from 'react-icons/ri'


const NavigationBar = () => {
    return (
        <div className="navbar">
            <Navbar bg="dark" data-bs-theme="dark">
                <Container className="navlist">
                    <Navbar.Brand href="#home"><span className="nav-icon"><RiShoppingCartFill /></span> - List</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link to="/newitem" as={Link}>Add Item</Nav.Link>
                        <Nav.Link to="/" as={Link}>View List</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavigationBar