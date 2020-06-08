import React, {Component} from "react";
import axios from "axios";
import './SignUp.css'
import {Redirect} from "react-router-dom";

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
            valid: "",
            redirect: null
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

    setCountry(e) {
        this.setState({country: e.target.value})
    }

    setValid(e) {
        this.setState({valid: e})
    }

    setRedirect(e) {
        this.setState({redirect: e})
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
                this.setRedirect("/summary")
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
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        return (
            <div>
                <h1>Sign Up</h1>
                <div className="Person">
                    <div>
                        <input type="text"
                               placeholder="First Name"
                               onChange={e => this.setFirstName(e)}/>
                    </div>
                    <div>
                        <input type="text"
                               placeholder="Last Name"
                               onChange={e => this.setLastName(e)}/>
                    </div>
                    <div>
                        <input type="text"
                               placeholder="Email"
                               onChange={e => this.setEmail(e)}/>
                    </div>
                    <div>
                        <input type="text"
                               placeholder="Password"
                               onChange={e => this.setPassword(e)}/>
                    </div>
                    <div>
                        <input type="text"
                               placeholder="Budget"
                               onChange={e => this.setBudget(e)}/>
                    </div>
                    <div>
                        <input type="text"
                               placeholder="Country"
                               onChange={e => this.setCountry(e)}/>
                    </div>
                    <p style={{paddingTop: "4px"}}>{this.state.valid}</p>
                    <div>
                        <form onSubmit={this.signUpHandler}>
                            <button className="button">Join</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignUp;
