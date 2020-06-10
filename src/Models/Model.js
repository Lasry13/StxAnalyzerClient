import React, {Component} from 'react';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit';
import {Button, Form} from 'react-bootstrap';
import axios from "axios";

class Model extends Component {
    render() {
        return(
            <div>
            <hr></hr>
            <h1>Select stocks which you want to buy</h1>
           <hr></hr>
            </div>
        )
    }
}

export default Model
