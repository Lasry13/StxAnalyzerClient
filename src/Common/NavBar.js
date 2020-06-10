import React, {Component} from 'react';
import './NavBar.css';
import {Nav, Navbar, Form, FormControl, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class NavBar extends Component {
    render() {
        return (
                <>
                    <Navbar bg="primary" variant="dark">
                        <Navbar.Brand href="/homePage">StxAnalyzer</Navbar.Brand>
                        <Nav className="mr-auto">
                            <Nav.Link href="/homePage">Home</Nav.Link>
                            <Nav.Link href="/summary">Summary</Nav.Link>
                            <Nav.Link href="/marketplace">Marketplace</Nav.Link>
                            <Nav.Link href="/models">Optimization</Nav.Link>
                            <Nav.Link href="/analytics">Exploration</Nav.Link>
                            <Nav.Link href="/user">User</Nav.Link>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-light">Search</Button>
                        </Form>
                    </Navbar>
                </>

        );
    }
}

export default NavBar;
