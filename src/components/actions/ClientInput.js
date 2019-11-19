import React, { Component } from 'react';
import Input from '@material-ui/core/Input';
import '../styles/actions.css'



class ClientInput extends Component {
  saveUserData=(event)=>{
    this.props.saveUserData(event)
  }

  render(){
    return(
        <div id="client-input">
        <h4 className="actions-header"><span>INPUT</span></h4>
        <div><span className="actions-name">Client:</span><Input className="actions-value" onChange = {this.saveUserData}></Input></div>
        </div>
    );
 }
}
export default ClientInput;