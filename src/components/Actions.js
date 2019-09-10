import React, { Component } from 'react';
import Update from '../components/actions/Update';
import AddClient from '../components/actions/AddClient';
import ClientInput from '../components/actions/ClientInput';

class Actions extends Component {
  constructor() {
    super();
    this.state = {}

  }

  saveUserData = (event) => {
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

  declareSale = () => {
    const data = this.props.state.data;
    const userIndex = data.findIndex(d => d.name === this.state.name);
    this.props.declareSale(userIndex)
  }

  addNewUser=()=>{
    this.props.addNewUser(this.state)
  }

  render() {
    return (
      <div>
        <ClientInput saveUserData={this.saveUserData} />
        <Update data={this.props.state.data} user={this.state.user} saveUserData={this.saveUserData} updateUserData={this.updateUserData} declareSale={this.declareSale} />
        <AddClient saveUserData={this.saveUserData} addNewUser={this.addNewUser}/>
      </div>
    );
  }
}
export default Actions;