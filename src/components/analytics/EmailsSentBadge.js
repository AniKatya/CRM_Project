import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

//how many clients do not have a null value in their emailTypeproperty
class EmailsSentBadge extends Component {

  render(){
    const data = this.props.data
    const emailsNumber = data.filter(d=>d.emailType).map(d=>d).length
    return(
        <div className = "badge-container" >
          <FontAwesomeIcon className = "badge-icon" id="emails-sent-badge" icon={faEnvelope} />
          <div className="badge-data">{emailsNumber}</div>
          <div className="badge-comment">Emails Sent</div>
        </div>
    );
 }
}
export default EmailsSentBadge;