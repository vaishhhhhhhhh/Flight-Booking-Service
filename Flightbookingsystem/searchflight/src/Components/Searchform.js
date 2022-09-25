import React, { useState, Component } from 'react'
import ReactDOM from "react-dom/client";
import { Link, useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'

function Search() {
    
    const navigate=useNavigate();
    const [inputs, setInputs] = useState({});

    const handleChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    }

    const handleSubmit = event => {
        
        console.log(inputs);
        event.preventDefault()
        navigate('/flightdetails', { state: {origin: inputs.origin, destination: inputs.destination}})
    }
    
    return (
       
        
        <form onSubmit={handleSubmit}>
            
            <div className='form'>
            
                <Stack direction='row' spacing={2}>
                    <TextField
                        required
                        autoFocus
                        id="outlined-required"
                        label="From"
                        name='origin'
                        value={inputs.origin || ""}
                        inputProps={{ pattern: '[a-zA-Z]{3,15}$' }}
                        onChange={handleChange}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="To"
                        name='destination'
                        value={inputs.destination || ""}
                        inputProps={{ pattern: '[a-zA-Z]{3,15}$' }}
                        onChange={handleChange}
                    />
                    
                    <Button variant='contained' type='submit'>Search Flight</Button>
                </Stack>
            </div>
        </form>
        
    )

}

export default Search;
