import React, {Component} from "react";
import axios from "axios";
import {Redirect} from "react-router-dom";
import {Button, Form} from "react-bootstrap";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            valid: "",
            redirect: null
        };
    }

    setEmail(e) {
        this.setState({email: e.target.value})
    }

    setPassword(e) {
        this.setState({password: e.target.value})
    }

    setValid(e) {
        this.setState({valid: e})
    }

    setRedirect(e) {
        this.setState({redirect: e})
    }

    validateEmail = (email) => {
        let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    validatePassword = (password) => {
        let re = /^[A-Za-z]\w{7,14}$/;
        return re.test(password);
    }

    validateLogin = () => {
        if (!this.validateEmail(this.state.email)) {
            this.setValid("Please enter a valid username")
            return false
        } else if (!this.validatePassword(this.state.password)) {
            this.setValid("Please enter a valid password")
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

    signInHandler = async (event) => {
        event.preventDefault();
        if (this.validateLogin()) {
            try {
                let body = {"email": this.state.email, "password": this.state.password}
                let options = this.getRequestOptions("post", "http://localhost:5000/user/login", body)
                let res = await this.doRequest(options)
                console.log(res.data.message)
                sessionStorage.setItem('email', 'daniel.lasry9@gmail.com');
                this.setRedirect("/summary")
            } catch (e) {
                if (e.response) {
                    let message;
                    message = e.response.data.message
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
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect}/>
        }
        return (
            <div style={{
                display: 'block',
                margin: 'auto',
                width: '30%',
                height: '50%',
                border: '1px solid #eee'
            }}>
                <h1>StxAnalyzer</h1>
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

export default Login;
