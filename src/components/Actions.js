import React, { Component } from 'react';
import Update from '../components/actions/Update';
import AddClient from '../components/actions/AddClient';
import Paper from '@material-ui/core/Paper';
import '../components/styles/actions.css'
import axios from 'axios';
const url = `http://localhost:5000`


class Actions extends Component {
  constructor() {
    super();
    this.state = {}

  }

  saveUserData = (event) => {
    console.log(event.target.name)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  updateUserData = () => {
    const data = this.props.state.data;
    const userIndex = data.findIndex(d => d.name === this.state.name);
    const updatedKey = Object.keys(this.state).filter(k => k !== "name").map(k => k)[0]
    const newValue = this.state[updatedKey]
    this.props.updateUserData(userIndex, updatedKey, newValue)
  }

  declareSale = async() => {
    axios.get(`${url}/clients`)
      .then(res=> {
        const userIndex = res.data.findIndex(d => d.name === this.state.name)
        this.props.declareSale(userIndex)
      })
  }

  addNewUser=()=>{
    this.props.addNewUser(this.state)
  }

  render() {
    return (
      <div className = "actions-page">
        <Paper className = "actions-container">
        <Update data={this.props.state.data} user={this.state.user} saveUserData={this.saveUserData} updateUserData={this.updateUserData} declareSale={this.declareSale} />
        </Paper>
        <Paper classname = "actions-container">
        <AddClient saveUserData={this.saveUserData} addNewUser={this.addNewUser}/>
        </Paper>
      </div>
    );
  }
}
export default Actions;