import './Summary.css'
import '../Marketplace/mm.css'
import {Dropdown, Button} from 'react-bootstrap';
import React, {Component} from "react";

class Summary extends Component {

    render() {
        return (
            <div>
                <div className="main">
                    <div className="card">Left</div>
                    <div className="card">Middle</div>
                    <div className="card">Right</div>
                </div>
                <div className="slider">
                    <div className="dropdown">
                        <Dropdown>
                            <div id="left">
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    Select Stocks
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item>dsd</Dropdown.Item>
                                </Dropdown.Menu>
                            </div>
                        </Dropdown>
                    </div>
                </div>
            </div>
        )
    }
}

export default Summary
