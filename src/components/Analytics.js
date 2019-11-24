import React, { Component } from 'react';
import axios from 'axios';
import Badges from './analytics/Badges'
import TopEmployees from './analytics/TopEmployees';
import SalesByCountry from './analytics/SalesByCountry';
import '../components/styles/charts.css'
const url = "http://localhost:5000" || ''


class Analytics extends Component {
    constructor() {
        super()
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        axios.get(`${url}/clients`)
            .then(res => {
                const data = res.data;
                this.setState({ data });
            })
    }

    render() {
        return (
            <div className='analytics-page'>
                <Badges data={this.state.data} newClients={this.state.newClients} />
                <div className="charts">
                    <TopEmployees data={this.state.data} />
                    <SalesByCountry data={this.state.data} />
                </div>
            </div>
        );
    }
}

export default Analytics;