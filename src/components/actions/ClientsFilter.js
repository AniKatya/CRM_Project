import React, { Component } from 'react';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import Input from '@material-ui/core/Input';
import '../styles/clients.css'


class ClientsFilter extends Component {
    state = {
        columnName: 'name',
        valueName: ''
    }
    handleColumnChange = (event) => {
        this.setState({
            columnName: event.target.value
        })
        this.props.filterData(event.target.value, this.state.valueName)
    }

    handleValueChange = (event) => {
        this.setState({
            valueName: event.target.value
        })
        this.props.filterData(this.state.columnName, event.target.value)
    }


    render() {
        return (
            <div className="clients-filter">
                <Input className="value-filter" onChange={this.handleValueChange} value={this.state.valueName} type="Text" placeholder="Search"></Input>
                <FormControl className="column-filter">
                    <NativeSelect
                        defaultValue={'Name'}
                        onChange={this.handleColumnChange}
                        inputProps={{
                            name: 'name',
                            id: 'uncontrolled-native',
                        }}>
                        >
                    <option value={'name'}>Name</option>
                        <option value={'email'}>E-mail</option>
                        <option value={'owner'}>Owner</option>
                        <option value={'country'}>Country</option>

                    </NativeSelect>
                </FormControl>
            </div>
        )
    }
}

export default ClientsFilter;