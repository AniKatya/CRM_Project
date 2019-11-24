import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';

import Clients from './components/Clients';
import Analytics from './components/Analytics';
import Actions from './components/Actions';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
// const url = "http://localhost:5000" 

const theme = createMuiTheme(
  {
    palette: {
      primary: {
        main: '#EAC563',
      }
    }
  }
);

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    axios.get(`/clients`)
      .then(res => {
        const data = res.data;
        this.setState({
          data: data
        });
      })
  }

  updateUserData = (userIndex, updatedKey, newValue) => {
    const data = [...this.state.data]
    let obj = data[userIndex]
    obj[updatedKey] = newValue
    axios.put(`/update_client`, obj)
      .then(res => {
        alert("Data has been successfully updated")
        })
      }
  

  declareSale = (userIndex) => {
    const data = [...this.state.data]
    let obj = data[userIndex]
    console.log(userIndex)
    obj.sold = true
    axios.put(`/update_client`, obj)
      .then(res => {
        console.log(res.data)
      })
  }

  addNewUser = (obj) => {
    axios.post(`/add_client`, obj)
      .then(res => {
        alert("New client has been successfully added")
      })
  }

  filterData = (columnName, valueName) => {
    const data = [...this.state.data]
    const filteredData = data.filter(dt => dt[columnName].toLowerCase().includes(valueName.toLowerCase()))
    this.setState({
      data: filteredData
    })
  }

  render() {
    return (
      <Router>
        <MuiThemeProvider theme={theme}>
          <AppBar position="static">
            <div id="main-links">
              <Button><Link className="navbar-link" to="/">Clients</Link></Button>
              <Button><Link className="navbar-link" to="/actions">Actions</Link></Button>
              <Button><Link className="navbar-link" to="/analytics">Analytics</Link></Button>
            </div>
          </AppBar>
        </MuiThemeProvider>
        <div id="routes">
          <Route path="/" exact render={() => <Clients handleChangePage={this.handleChangePage} state={this.state} declareSale={this.declareSale} updateUserData={this.updateUserData} filterData={this.filterData} data={this.state.data} />} />
          <Route path="/actions" exact render={() => <Actions state={this.state} updateUserData={this.updateUserData} addNewUser={this.addNewUser} />} />
          <Route path="/analytics" exact render={() => <Analytics />} />
        </div>
      </Router>

    );
  }
}


export default App;