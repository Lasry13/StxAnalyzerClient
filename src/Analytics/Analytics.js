import React, {Component} from 'react';
import {Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

class Analytics extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            data: []
        }
    }

    setData(e) {
        this.setState({data: e})
    }

    componentDidMount = async () => {
        try {
            this.state.isLoading = false
            let options = this.getRequestOptions("get", "http://localhost:4000/analytics/getSummary")
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

    getRequestOptions = (method, url) => {
        return {
            method: method,
            url: url,
        }
    }

    doRequest = async (options) => {
        return axios(options);
    }

    render() {
        if (this.state.isLoading) {
            return <p>Loading ...</p>;
        }
        return (
            <div>
                <Table responsive>
                    <thead>
                    <tr>
                        <th>Symbol</th>
                        <th>Name</th>
                        <th>Sector</th>
                        <th>Open</th>
                        <th>High</th>
                        <th>Low</th>
                        <th>Close</th>
                        <th>Volume</th>
                        <th>DCP</th>
                        <th>DCV</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.data.map((key) =>
                            <tr>
                                <td>{key.symbol}</td>
                                <td>{key.name}</td>
                                <td>{key.sector}</td>
                                <td>{key.open}</td>
                                <td>{key.high}</td>
                                <td>{key.low}</td>
                                <td>{key.close}</td>
                                <td>{key.volume}</td>
                                <td>{key.daily_change_percent + '%'}</td>
                                <td>{key.daily_change_value}</td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default Analytics
