import React, { Component } from 'react';
import '../styles/badges.css'
import NewClientBadge from './NewClientBadge';
import EmailsSentBadge from './EmailsSentBadge';
import ClientsBadge from './ClientsBadge';
import HottestCountry from './HottestCountry';



class Badges extends Component {
  constructor() {
    super();
    this.state = {}
  }
  render() {
    return (
      <div className="badges-comp">
         <NewClientBadge getNewClients = {this.props.getNewClients} data = {this.props.data}/>
         <EmailsSentBadge data = {this.props.data}/>
         <ClientsBadge data = {this.props.data}/>
         <HottestCountry data = {this.props.data}/>
      </div>
    )
  }
}
export default Badges;