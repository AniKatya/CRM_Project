import React, { Component } from 'react';
import '../components/styles/clients.css'
import Popup from './clients/Popup';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import ClientsFilter from '../components//actions/ClientsFilter.js'
import TablePagination from '@material-ui/core/TablePagination';
import Paper from '@material-ui/core/Paper';
import CheckOutlinedIcon from '@material-ui/icons/CheckOutlined';


class Clients extends Component {
    constructor() {
        super()
        this.state = {
            popup: false,
            currentId: "",
            page: 0,
            rowsPerPage: 25
        }
    }

    handleChangePage = (event, newPage) => {
        this.setState({
            page: newPage
        })
    };

    handleChangeRowsPerPage = event => {
        this.setState({
            rowsPerPage: event.target.value
        })
    };

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
        const data = this.props.data
        const index = data.findIndex(element => element._id === id);
        this.setState({ currentId: index })
    }

    filterData = (columnName, valueName) => {
        this.props.filterData(columnName, valueName)
    }

    render() {
        return (
            <Paper className="clients-page">
                {this.state.popup ?
                    <Popup declareSale={this.props.declareSale} state={this.props.state} showPopup={this.showPopup} closePopup={this.closePopup} currentId={this.state.currentId} saveUserData={this.props.saveUserData} updateUserData={this.props.updateUserData} />
                    : null}
                <div className="table-config">
                    <ClientsFilter filterData={this.filterData} />
                    <TablePagination
                        rowsPerPageOptions={[25, 50, 100]}
                        component="div"
                        count={this.props.data.length}
                        rowsPerPage={this.state.rowsPerPage}
                        page={this.state.page}
                        backIconButtonProps={{
                            'aria-label': 'previous page',
                        }}
                        nextIconButtonProps={{
                            'aria-label': 'next page',
                        }}
                        onChangePage={this.handleChangePage}
                        onChangeRowsPerPage={this.handleChangeRowsPerPage}
                    />
                </div>
                <Table>
                    <TableHead className="table-head">
                        <TableRow>
                            <TableCell className="table-head">Name</TableCell>
                            <TableCell className="table-head">E-mail</TableCell>
                            <TableCell className="table-head">Country</TableCell>
                            <TableCell className="table-head">Sold</TableCell>
                            <TableCell className="table-head">Owner</TableCell>
                            <TableCell className="table-head">First contact</TableCell>
                        </TableRow>
                    </TableHead>

                    {this.props.data.slice(this.state.page * this.state.rowsPerPage, this.state.page * this.state.rowsPerPage + this.state.rowsPerPage).map(d =>
                        <TableBody>
                            <TableRow className = "table-row" id={d._id} onClick={this.showPopup}>
                                <TableCell>{d.name}</TableCell>
                                <TableCell>{d.email}</TableCell>
                                <TableCell>{d.country}</TableCell>
                                <TableCell>{d.sold ? <CheckOutlinedIcon></CheckOutlinedIcon> : null}</TableCell>
                                <TableCell>{d.owner}</TableCell>
                                <TableCell>{d.firstContact.slice(0,d.firstContact.indexOf("T")).replace(/-/g,"/")}</TableCell>
                            </TableRow>
                        </TableBody>
                    )}
                </Table>
            </Paper>
        )
    }
}
export default Clients;