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
  declareSale = () => {
    this.props.declareSale()
  }
  render() {
    const allOwners = this.props.data.map(d => d.owner)
    const uniqueOwners = [...new Set(allOwners)];

    return (
      <div id="update-component">
        <div>
          <span className = "input-name">Transfer ownership to:</span>
          <select id="dropdown">
          <option disabled selected hidden>Owner</option>
          {uniqueOwners.map(o=><option>{o}</option>)}
          </select>
          <Button>Transfer</Button>
          
        </div>
        <div>
          <span className = "input-name">Send email:</span>
              <Input name="email" onChange={this.saveUserData}></Input>
          <Button onClick={this.updateUserData}>Send</Button>
        </div>
        <div>
        <span className = "input-name">Declare sale:</span>
              <Button onClick={this.declareSale}>Declare</Button>
        </div>
      </div>
    );
  }
}
export default Update;