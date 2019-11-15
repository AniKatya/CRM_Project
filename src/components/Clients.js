import React, { Component } from 'react';
import '../components/styles/clients.css'
import Popup from './Popup';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import ClientsFilter from '../components//actions/ClientsFilter.js'


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
            <div className ="clients-page">
                {this.state.popup ? <Popup state={this.props.state} showPopup={this.showPopup} closePopup={this.closePopup} currentId={this.state.currentId} saveUserData={this.props.saveUserData} updateUserData={this.props.updateUserData} /> : null}
                <ClientsFilter />
                <Table>
                    <TableHead className="table-head">
                        <TableRow>
                            <TableCell className="table-head">Name</TableCell>
                            <TableCell className="table-head">E-mail</TableCell>
                            <TableCell className="table-head">Owner</TableCell>
                            <TableCell className="table-head">Country</TableCell>
                        </TableRow>
                    </TableHead>
                    {this.props.state.data.map(d =>
                        <TableBody>
                            <TableRow id={d._id} onClick={this.showPopup}>
                                <TableCell>{d.name}</TableCell>
                                <TableCell>{d.email}</TableCell>
                                <TableCell>{d.owner}</TableCell>
                                <TableCell>{d.country}</TableCell>
                            </TableRow>
                        </TableBody>
                    )}
                </Table>
            </div>)
    }
}
export default Clients;