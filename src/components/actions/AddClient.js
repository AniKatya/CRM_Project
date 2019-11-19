import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import '../styles/actions.css'


class AddClient extends Component {
  saveUserData = (event) => {
    this.props.saveUserData(event)
  }
  render() {
    return (
      <div>
      <h4 className = "actions-header">ADD NEW CLIENT</h4>
      <div className="actions-container">
        <div><span className="actions-name">Name:</span><Input className="actions-value" name="name" onChange = {this.saveUserData}></Input></div> 
        <div><span className="actions-name">E-mail:</span><Input className="actions-value"name="email" onChange = {this.saveUserData}></Input></div> 
        <div><span className="actions-name">Country</span><Input className="actions-value"name="country" onChange = {this.saveUserData}></Input></div> 
        <div><span className="actions-name">Owner:</span><Input className="actions-value"name="owner" onChange = {this.saveUserData}></Input>
        <Button className = "button" id = "add-button" onClick = {this.props.addNewUser}><span className="button-label">Add</span></Button></div>
      </div>
    </div>
    );
  }
}
export default AddClient;