import React, {Component} from "react";
import './Login.css'
import axios from "axios";
import { Redirect } from "react-router-dom";

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
            return <Redirect to={this.state.redirect} />
        }
        return (
            <div>
                <h1>StxAnalyzer</h1>
            <div className="loginBox" style={{overflow:'hidden'}}>
                <div>
                    <input type="text"
                           placeholder="email"
                           onChange={e => this.setEmail(e)}/>
                </div>
                <div>
                    <input type="text"
                           placeholder="password"
                           onChange={e => this.setPassword(e)}/>
                </div>
                <p style={{paddingTop: "4px"}}>{this.state.valid}</p>
                <div>
                    <form onSubmit={this.signInHandler}>
                        <button className="button">Sign in</button>
                    </form>
                </div>
                <a href={'/signUp'} className="forgot">Forgot password?</a>
                <p style={{paddingTop: "4px"}}>New to StxAnalyzer?<span className="join"><a href={'/signUp'}> Join Now!</a></span></p>
            </div>
            </div>
        )
    }
}

export default Login;
