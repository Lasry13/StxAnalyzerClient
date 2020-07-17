import React, {Component} from "react";
import axios from "axios";
import {Button, Form} from "react-bootstrap";

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            budget: null,
            country: "",
            validationMessage: "",
        };
    }

    setFirstName(e) {
        this.setState({firstName: e.target.value})
    }

    setLastName(e) {
        this.setState({lastName: e.target.value})
    }

    setEmail(e) {
        this.setState({email: e.target.value})
    }

    setPassword(e) {
        this.setState({password: e.target.value})
    }

    setBudget(e) {
        this.setState({budget: e.target.value})
    }

    setValid(message) {
        this.setState({valid: message})
    }


    validateName = (name) => {
        return name.length > 0
    }

    validateEmail = (email) => {
        let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    validatePassword = (password) => {
        let re = /^[A-Za-z]\w{7,14}$/;
        return re.test(password);
    }

    validateBudget = (budget) => {
        return budget > 0 && budget < 500000
    }

    validateCountry = (country) => {
        return country.length > 0
    }

    validateSignUp = () => {
        if (!this.validateName(this.state.firstName)) {
            this.setValid("Please enter a valid firstName")
            return false
        } else if (!this.validateName(this.state.lastName)) {
            this.setValid("Please enter a valid lastName")
            return false
        } else if (!this.validateEmail(this.state.email)) {
            this.setValid("Please enter a valid email")
            return false
        } else if (!this.validatePassword(this.state.password)) {
            this.setValid("Please enter a valid password")
            return false
        } else if (!this.validateBudget(this.state.budget)) {
            this.setValid("Please enter a valid budget")
            return false
        } else if (!this.validateCountry(this.state.country)) {
            this.setValid("Please enter a valid country")
            return false
        }
        return true
    }

    getRequestOptions = (method, url, data) => {
        return {
            method: method,
            url: url,
            data: data
        }
    }

    signUpHandler = async (event) => {
        event.preventDefault();
        if (this.validateSignUp()) {
            try {
                let body = {
                    "firstName" : this.state.firstName,
                    "lastName" : this.state.firstName,
                    "email": this.state.email,
                    "password": this.state.password,
                    "budget" : this.state.budget,
                    "country" : this.state.country
                }
                let options = this.getRequestOptions("post", "http://localhost:5000/user/signUp", body)
                let res = await this.doRequest(options)
                console.log(res.data)
            } catch (e) {
                if (e.response) {
                    let message;
                    message = e.response.data
                    this.setValid(message)
                } else {
                    console.log(e)
                }
            }
        }
    }

    doRequest = async (options) => {
        return axios(options);
    }

    render() {
        return (
            <div style={{
                display: 'block',
                margin: 'auto',
                width: '30%',
                height: '50%',
                border: '1px solid #eee'
            }}>
                <h1>Sign Up</h1>
                <Form onSubmit={this.signInHandler}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={e => this.setEmail(e)}/>
                        <Form.Text className="text-muted">

                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password"  placeholder="Password" onChange={e => this.setPassword(e)}/>
                    </Form.Group>
                    <div>
                        <p>{this.state.valid}</p>
                    </div>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out"/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}

export default SignUp;
