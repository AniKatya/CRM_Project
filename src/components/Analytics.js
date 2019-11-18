import React, { Component } from 'react';
import axios from 'axios';
import Badges from './analytics/Badges'
import TopEmployees from './analytics/TopEmployees';
import SalesByCountry from './analytics/SalesByCountry';
import '../App.css'



class Analytics extends Component {
    constructor() {
        super()
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:5000/clients`)
            .then(res => {
                const data = res.data;
                this.setState({ data });
            })
        }

    render() {
        return (
            <div className ='analytics-page'>
                <Badges data={this.state.data} newClients={this.state.newClients} />
                <TopEmployees data={this.state.data} />
                <SalesByCountry data={this.state.data} />
            </div>
        );
    }
}

export default Analytics;