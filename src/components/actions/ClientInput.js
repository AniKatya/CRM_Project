import React, { Component } from 'react';
import Input from '@material-ui/core/Input';


class ClientInput extends Component {
  saveUserData=(event)=>{
    this.props.saveUserData(event)
  }
  render(){
    return(
        <div id="client-input">
        <h4 className="input-header">Input</h4>
        <div>Client:<Input id="input-placeholder" placeholder="Client name" name = "name" onChange = {this.saveUserData}></Input></div>
        </div>
    );
 }
}
export default ClientInput;