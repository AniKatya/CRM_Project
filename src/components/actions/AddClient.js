import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';


class AddClient extends Component {
  saveUserData = (event) => {
    this.props.saveUserData(event)
  }
  render() {
    return (
      <div id="add-client">
        <h4 className = "input-header">Add client</h4>
        <div>Name:<Input name="name" onChange = {this.saveUserData}></Input></div>
        <div>Country<Input name="country" onChange = {this.saveUserData}></Input></div>
        <div>Owner:<Input name="owner" onChange = {this.saveUserData}></Input></div>
        <Button onClick = {this.props.addNewUser}>Add new client</Button>
      </div>
    );
  }
}
export default AddClient;