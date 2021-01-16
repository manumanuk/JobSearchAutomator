import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

class NavBar extends Component {
    state = {  }
    render() { 
        return (
        <Navbar id="nav" collapseOnSelect expand="lg" sticky="top">
            <Navbar.Brand className="ml-2" id="nav-title" className="raleway letters-wide">JOBBERS</Navbar.Brand>
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