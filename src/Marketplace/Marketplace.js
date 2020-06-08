import React, {Component} from 'react';
import axios from "axios"
import {Dropdown, Nav} from 'react-bootstrap';
import './mm.css'
import {Redirect} from "react-router-dom";
import Select from 'react-select'

class Marketplace extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            data: [],
            SelectedItems: []
        }
    }
    options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]

    setData(e) {
        this.setState({data: e})
    }

    componentDidMount = async () => {
        try {
            this.state.isLoading = false
            let options = this.getRequestOptions("get", "http://localhost:4000/analytics/getSp500")
            let res = await this.doRequest(options)
            this.setData(res.data)
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


    onClickHandler = event => {
        const value = event.target.innerHTML;
        this.setState({
            SelectedItems: this.state.SelectedItems.concat([value])
        })
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
        try {
            let body = {
                "email": sessionStorage.getItem('email'),
                "stocks": this.state.SelectedItems
            }
            let options = this.getRequestOptions("post", "http://localhost:5000/user/add", body)
            let res = await this.doRequest(options)
            alert("Your file is being uploaded!")
        } catch (e) {

        }

    }

    doRequest = async (options) => {
        return axios(options);
    }

    render() {
        if(!sessionStorage.getItem("email"))
            return <Redirect to={"/login"} />
        if (this.state.isLoading) {
            return <p>Loading ...</p>;
        }
        return (
            <div className="dropdown">
                <hr></hr>
                <h1>Select stocks which you want to buy</h1>
                <hr></hr>
                <Nav fill variant="tabs" defaultActiveKey="/home">
                    <Nav.Item>
                        <Nav.Link href="/home">Active</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">Loooonger NavLink</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2">Link</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="disabled" disabled>
                            Disabled
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
                <Dropdown>
                    <div id="left">
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Select Stocks
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {this.state.data.map(size => (
                            <Dropdown.Item onClick={(e) => this.onClickHandler(e)}>{size.name}</Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                    </div>
                </Dropdown>
                <div style={{marginTop : '100px', display : "inline-block"}}>
                <Select options={this.options} />
                </div>
            </div>
        );
    }
}

export default <Marketplace></Marketplace>
