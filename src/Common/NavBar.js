import React, {Component} from 'react';
import './NavBar.css';
import {Nav, Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class NavBar extends Component {
    render() {
        return (
            <>
                <Navbar bg="primary" variant="dark">
                    <Navbar.Brand href="/homePage">StxAnalyzer</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link className="tab" href="/marketplace">Marketplace</Nav.Link>
                        <Nav.Link className="tab" href="/models">Models</Nav.Link>
                        <Nav.Link className="tab" href="/analytics">Analytics</Nav.Link>
                        <Nav.Link className="tab" href="/user">User</Nav.Link>
                    </Nav>
                </Navbar>
                <br/>
            </>

        );
    }
}

export default NavBar;
