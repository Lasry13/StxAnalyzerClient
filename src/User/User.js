import React, {useState, useEffect} from 'react';
import {Form, Col, Row} from 'react-bootstrap';
import axios from "axios";

function User() {
    const [userDetails, setUserDetails] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:5000/user/getUserByEmail/daniel.lasry9@gmail.com')
            .then(response => {
                setUserDetails(response.data);
                setIsLoading(false)
                console.log(response.data)
            });
    }, []);

    if (isLoading)
        return <p>Loading ...</p>;
    return (
        <div>
            <hr></hr>
            <h1>Update personal details</h1>
            <hr></hr>
            <Form>
                <Form.Group as={Row} controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                        First Name
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="password" placeholder={userDetails.user.firstName}/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                        Last Name
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="password" placeholder={userDetails.user.lastName}/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                        Email
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="password" placeholder={userDetails.user.email}/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                        Country
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="password" placeholder={userDetails.user.country}/>
                    </Col>
                </Form.Group>
            </Form>
        </div>
    )
}

export default User
