import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import Input from '@material-ui/core/Input';
import '../styles/clients.css'


export default function ClientsFilter() {
    return (
        <div className = "clients-filter">
            <Input type="Text" placeholder="Search"></Input>
            <FormControl>
                <NativeSelect
                    defaultValue={1}
                    inputProps={{
                        name: 'name',
                        id: 'uncontrolled-native',
                    }}>
                    <option value={1}>Name</option>
                    <option value={2}>E-mail</option>
                    <option value={3}>Owner</option>
                    <option value={4}>Country</option>
                </NativeSelect>
            </FormControl>
        </div>
    )


}

