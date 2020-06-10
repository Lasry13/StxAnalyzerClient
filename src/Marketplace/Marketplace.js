import React, {Component} from 'react';
import {Table, Button, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";

class Marketplace extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            data: [],
            selectedItems: []
        }
    }

    setData(e) {
        this.setState({data: e})
    }

    componentDidMount = async () => {
        try {
            this.state.isLoading = false
            let options = this.getRequestOptions("get", "http://localhost:4000/analytics/getRealTimeGates")
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

    doRequest = async (options) => {
        return axios(options);
    }

    getRequestOptions = (method, url, data) => {
        return {
            method: method,
            url: url,
            data: data
        }
    }

    submitHandler = async (event) => {
        event.preventDefault();
        try {
            let body = {
                "email": sessionStorage.getItem('email'),
                "stocks": this.state.selectedItems
            }
            let options = this.getRequestOptions("post", "http://localhost:5000/marketplace/addStocks", body)
            let res = await this.doRequest(options)
            alert("Your file is being uploaded!")
        } catch (e) {

        }

    }

    handleChecked = (row, isSelected) => {
        if (isSelected) {
            this.setState({
                selectedItems: this.state.selectedItems.concat([row])
            })
        } else {
            this.setState(({selectedItems}) => ({
                selectedItems: selectedItems.filter((element) => (row.id !== element.id))
            }));
        }
    }


    render() {
        if (this.state.isLoading) {
            return <p>Loading ...</p>;
        }
        const selectRowProp = {
            mode: 'checkbox',
            bgColor: '#D3D3D3',
            onSelect: (row, isSelect) => {
                this.handleChecked(row, isSelect)
                console.log(this.state.selectedItems)
            }
        }
        const columns = [
            {
                dataField: 'symbol',
                text: 'Symbol',
                sort: true,
            }, {
                dataField: 'name',
                text: 'Name',
                sort: true
            }
            , {
                dataField: 'close',
                text: 'Gate',
                sort: true
            },
            {
                dataField: 'daily_change_percent',
                text: 'DCP',
                sort: true
            },
            {
                dataField: 'daily_change_value',
                text: 'DCV',
                sort: true
            },
        ];
        return (
            <div>
                <hr></hr>
                <h1>Select stocks which you want to buy</h1>
                <hr></hr>
                <BootstrapTable
                    keyField='symbol'
                    data={this.state.data}
                    columns={columns}
                    selectRow={selectRowProp}
                    striped
                    pagination={paginationFactory({
                        page: 1,
                        sizePerPage: 10,
                        hideSizePerPage: true
                    })}
                />
                <Form onSubmit={this.submitHandler}>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}

export default Marketplace
