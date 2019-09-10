import React, { Component } from 'react';
import '../styles/clients.css'
import Popup from './Popup';


class Clients extends Component {
    constructor() {
        super()
        this.state = {
            popup: false,
            currentId: ""
        }
    }

    closePopup = () => {
        this.setState({ popup: false })
    }

    showPopup = (event) => {
        this.setState({ popup: true })
        this.setCurrentID(event)
    }

    updateUserData = () => {
            this.props.updateUserData()
    }

    setCurrentID = (event) => {
        const id = event.currentTarget.getAttribute('id')
        const data = this.props.state.data
        const index = data.findIndex(element => element._id === id);
        this.setState({ currentId: index })
    }


    render() {
        return (
            <div id="clients-page">
                {this.state.popup ? <Popup state={this.props.state} showPopup={this.showPopup} closePopup={this.closePopup} currentId={this.state.currentId} saveUserData = {this.props.saveUserData} updateUserData={this.props.updateUserData}/> : null}
                <input placeholder="Search"></input>
                <table id="clients-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>E-mail</th>
                            <th>Owner</th>
                            <th>Country</th>
                        </tr>
                    </thead>
                    {this.props.state.data.map(d =>
                        <tbody >
                            <tr id={d._id} onClick={this.showPopup}>
                                <td>{d.name}</td>
                                <td>{d.email}</td>
                                <td>{d.owner}</td>
                                <td>{d.country}</td>
                            </tr>
                        </tbody>

                    )}
                </table>
            </div>)
    }
}
export default Clients;