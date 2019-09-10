import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine } from '@fortawesome/free-solid-svg-icons'

//This badge shows clients that have a firstContact from this current month and year

class NewClientBadge extends Component {
    getNewClients = () => {
        const data = [...this.props.data]
        const currMonth = new Date().getMonth() + 1
        const currYear = new Date().getFullYear()
        const yearCheck = c => parseInt(c.firstContact.slice(0, 4)) === currYear
        const monthCheck = c => parseInt(c.firstContact.split('-')[1]) === currMonth
        const count = data.filter(d => monthCheck(d,currMonth) && yearCheck(d)).length
        return count
    }
    render() {
        const currMonth = new Date().getMonth() + 1
        var months = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"];

        return (
            <div className="badge-container">
                <FontAwesomeIcon className="badge-icon" id="new-clients-badge" icon={faChartLine} />
                <div className="badge-data">{this.props.data.length > 0 ? this.getNewClients() : null}</div>
                <div className="badge-comment">New {months[currMonth - 1]} Clients</div>
            </div>
        )
    }
}
export default NewClientBadge;