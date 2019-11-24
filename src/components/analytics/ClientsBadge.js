import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserTie } from '@fortawesome/free-solid-svg-icons'

class ClientsBadge extends Component {
  render() {
    const data = this.props.data
    const clients = data.filter(d => !d.sold).map(d => d).length
    return (
      <div className="badge-container">
        <FontAwesomeIcon className="badge-icon" id="outstanding-clients-badge" icon={faUserTie} />
        <div className="badge-data">{clients}</div>
        <div className="badge-comment">Outstanding Clients</div>
      </div>
    );
  }
}
export default ClientsBadge;