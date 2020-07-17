import React, {useState, useEffect} from 'react';
import {Form, Col, Row, Button, Modal} from 'react-bootstrap';
import axios from "axios";
import {getRequestOptions, doRequest} from '../utils/utils'

function User() {
    const [userDetails, setUserDetails] = useState(
        {
            user: {
                firstName: "",
                lastName: ""
            }
        });
    const [isLoading, setIsLoading] = useState(true);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = async () => {
        setShow(true);
        console.log(userDetails)
        let options = getRequestOptions('put', "http://localhost:5000/user/updateDetails/daniel.lasry9@gmail.com", userDetails)
        await doRequest(options)
    }


    useEffect(() => {
        axios.get('http://localhost:5000/user/getUserByEmail/daniel.lasry9@gmail.com')
            .then(response => {
                setUserDetails(response.data);
                setIsLoading(false)
                console.log(response.data)
            });
    }, []);

    const updateFirstName = e => {
        setUserDetails({...userDetails,
            user: {
                fieldOne: "c",
                fieldTwo: {
                    fieldTwoOne: "d",
                    fieldTwoTwo: "e"
                }
            },
        })}

    const updateLastName = e => {
        setUserDetails({...userDetails, lastName: e.target.value})
    }

    const updateEmail = e => {
        setUserDetails({...userDetails, email: e.target.value})
    }

    const updateCountry = e => {
        setUserDetails({...userDetails, country: e.target.value})
    }


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
                        <Form.Control placeholder={userDetails.user.firstName} onChange={e => updateFirstName(e)}/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                        Last Name
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control placeholder={userDetails.user.lastName} onChange={e => updateLastName(e)}/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                        Email
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control placeholder={userDetails.user.email} onChange={e => updateEmail(e)}/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                        Country
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control placeholder={userDetails.user.country} onChange={e => updateCountry(e)}/>
                    </Col>
                </Form.Group>
            </Form>
            <>
                <Button variant="primary" onClick={handleShow}>
                    Submit
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        </div>
    )
}

export default User
