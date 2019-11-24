import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import 'react-dropdown/style.css'
import '../styles/actions.css'


class Update extends Component {

  saveUserData = (event) => {
    this.props.saveUserData(event)
  }
  saveOwner = (event) => {
    this.props.saveOwner(event)
  }
  updateUserData = () => {
    this.props.updateUserData()
  }

  render() {
    const allOwners = this.props.data.map(d => d.owner)
    const uniqueOwners = [...new Set(allOwners)];

    return (
      <div>
       <h4 className = "actions-header">CHANGE CLIENT'S DATA </h4>
       <div><span className="actions-name">Client:</span><Input name = "name" className="actions-value" onChange = {this.saveUserData}></Input></div>
        <div><span className = "actions-name">Change e-mail:</span><Input name = "email" className="actions-value" onChange={this.saveUserData}></Input>
          <Button className = "button" onClick={this.updateUserData}><span className="button-label">Send</span></Button>
        </div>
        
        <div><span className = "actions-name">Transfer ownership to:</span>
          <select className = "actions-value" name="owner" onChange={this.saveUserData}>
          <option disabled selected hidden>Owner</option>
          {uniqueOwners.map(o=><option >{o}</option>)}
          </select>
          <Button onClick={this.updateUserData} className = "button"><span className="button-label">Transfer</span></Button>
        </div>
      </div>
    );
  }
}
export default Update;