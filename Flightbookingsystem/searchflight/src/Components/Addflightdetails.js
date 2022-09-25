import React, { Component, useState } from 'react';
import ReactDOM from "react-dom/client";

import axios from 'axios';

import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link, Typography } from '@mui/material';


function Addflightdetails() {
    
    const [inputs, setInputs] = useState({
        flightName: '',
        origin: '',
        destination: '',
        departureTime: '',
        arrivalTime: '',
        departureDate: '',
        arrivalDate: '',
        seats: '',
        fare: '',
    });

    const handleChange = (prop) => (event) => {
        setInputs({ ...inputs, [prop]: event.target.value });
      };


    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleSubmit = event => {
        alert(`You have succesfully updated the details!`)
        const userObject = {
            flightName: inputs.flightName,
            origin: inputs.origin,
            destination: inputs.destination,
            departureTime: inputs.departureTime,
            arrivalTime: inputs.arrivalTime,
            departureDate: inputs.departureDate,
            arrivalDate: inputs.arrivalDate,
            seats: inputs.seats,
            fare: inputs.fare

        }
        console.log(userObject);

        axios.post('http://localhost:8080/flight/create', userObject)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });
        event.preventDefault()
    }


        return (
            <form onSubmit={handleSubmit}>
                <div className='form'>
                    <Stack alignItems='center' direction='column' spacing={2}>
                        <Stack alignItems='center' direction='column' spacing={0}>
                            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography component='h1' variant='h5' color='black' >Add Flight details </Typography>
                        </Stack>
                        <Stack sx={{ m: 1, width: 'stretch' }} alignItems='center' direction='row' spacing={2}>
                        <TextField
                                required
                                fullWidth
                                autoFocus
                                id="outlined-required-flightName"
                                label="flightName"
                                name='flightName'
                                value={inputs.flightName}
                                inputProps={{ pattern: '[a-zA-Z]{4,30}$' }}
                                onChange={handleChange('flightName')}
                                />
                        </Stack>
                        <Stack sx={{ m: 1, width: 'stretch' }} alignItems='center' direction='row' spacing={2}>
                            
                            <TextField
                                required
                                fullWidth
                                id="outlined-required-origin"
                                label="origin"
                                name='origin'
                                value={inputs.origin}
                                inputProps={{ pattern: '[a-zA-Z]{4,30}$' }}
                                onChange={handleChange('origin')}
                            />
                            <TextField
                            required
                            fullWidth
                            id="outlined-required-destination"
                            label="destination"
                            name='destination'
                            value={inputs.destination}
                            inputProps={{ pattern: '[a-zA-Z]{4,30}$' }}
                            onChange={handleChange('destination')}
                        />
                        </Stack>
                        <Stack sx={{ m: 1, width: 'stretch' }} alignItems='center' direction='row' spacing={2}>
                        
                        <TextField
                            required
                            fullWidth
                            id="outlined-required-departureTime"
                            label="departureTime"
                            name='departureTime'
                            value={inputs.departureTime}
                            inputProps={{ pattern: '[0-9.:_%+-]{1,5}$' }}
                            onChange={handleChange('departureTime')}
                        />
                         <TextField
                            required
                            fullWidth
                            id="outlined-required-arrivalTime"
                            label="arrivalTime"
                            name='arrivalTime'
                            value={inputs.arrivalTime}
                            inputProps={{ pattern: '[0-9.:_%+-]{1,5}$' }}
                            onChange={handleChange('arrivalTime')}
                        />
                        </Stack>
                        <Stack sx={{ m: 1, width: 'stretch' }} alignItems='center' direction='row' spacing={2}>
                        <TextField
                            required
                            fullWidth
                            id="outlined-required-departureDate"
                            label="departureDate"
                            name='departureDate'
                            value={inputs.departureDate}
                            inputProps={{ pattern: '[0-9.:_%+-]{1,10}$' }}
                            onChange={handleChange('departureDate')}
                        />
                        <TextField
                            required
                            fullWidth
                            id="outlined-required-arrivalDate"
                            label="arrivalDate"
                            name='arrivalDate'
                            value={inputs.arrivalDate}
                            inputProps={{ pattern: '[0-9.:_%+-]{1,10}$' }}
                            onChange={handleChange('arrivalDate')}
                        />
                        </Stack>
                        <Stack sx={{ m: 1, width: 'stretch' }} alignItems='center' direction='row' spacing={2}>
                        <TextField
                            required
                            fullWidth
                            id="outlined-required-seats"
                            label="seats"
                            name='seats'
                            value={inputs.seats}
                            inputProps={{ pattern: '[0-9]{1,16}$' }}
                            onChange={handleChange('seats')}
                        />
                        <TextField
                            required
                            fullWidth
                            id="outlined-required-fare"
                            label="fare"
                            name='fare'
                            value={inputs.fare}
                            inputProps={{ pattern: '[0-9]{1,16}$' }}
                            onChange={handleChange('fare')}
                        />
                        </Stack>
                        </Stack>

                       <Button variant='contained' type='submit'>Submit</Button>
                </div>
            </form>
        )
    
}

export default Addflightdetails;