import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import logo from './Logo_Full.png'
import Image from 'react-bootstrap/Image'

class NavBar extends Component {
    state = {  }
    render() { 
        return (
        <Navbar id="nav" collapseOnSelect expand="lg" sticky="top">
            <Navbar.Brand href="#" className="ml-2" id="nav-title" className="raleway letters-wide"><Image height="50vh" src={logo}></Image></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link className="mr-2"></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        );
    }
}
 
export default NavBar;