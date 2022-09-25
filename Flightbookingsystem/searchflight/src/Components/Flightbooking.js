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
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function Flightbooking() {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        firstName: '',
        lastName: '',
        gender: '',
        age: '',
        mobileNum: '',
        requiredSeats: '',
        flightId: '',
    });

    const handleChange = (prop) => (event) => {
        setInputs({ ...inputs, [prop]: event.target.value });
      };


    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleSubmit = event => {
        alert(`Hello ${inputs.firstName} ${inputs.lastName}, you have booked your flight successfully!`)
        const userObject = {
            firstName: inputs.firstName,
            lastName: inputs.lastName,
            gender: inputs.gender,
            age: inputs.age,
            mobileNum: inputs.mobileNum,
            requiredSeats: inputs.requiredSeats,
            flightId: inputs.flightId

        }
        console.log(userObject);

        axios.post('http://localhost:8081/booking/create', userObject)
            .then((res) => {
                console.log(res.data)
                navigate('/bookingbyid',{state:{bookingId: res.data.bookingId}})
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
                            <Typography component='h1' variant='h5' color='black' >Booking form</Typography>
                        </Stack>
                        <Stack sx={{ m: 1, width: 'stretch' }} alignItems='center' direction='row' spacing={2}>
                            <TextField
                                required
                                fullWidth
                                autoFocus
                                id="outlined-required-firstName"
                                label="firstName"
                                name='firstName'
                                value={inputs.firstName}
                                inputProps={{ pattern: '[a-zA-Z]{4,16}$' }}
                                onChange={handleChange('firstName')}
                            />
                            <TextField
                                required
                                fullWidth
                                id="outlined-required-lastName"
                                label="lastName"
                                name='lastName'
                                value={inputs.phoneNo}
                                inputProps={{ pattern: '[a-zA-Z]{4,16}$' }}
                                onChange={handleChange('lastName')}
                            />
                        </Stack>
                        <Stack sx={{ m: 1, width: 'stretch' }} alignItems='center' direction='row' spacing={2}>
                        <TextField
                            required
                            fullWidth
                            id="outlined-required-gender"
                            label="gender"
                            name='gender'
                            value={inputs.gender}
                            inputProps={{ pattern: '[a-zA-Z]{4,16}$' }}
                            onChange={handleChange('gender')}
                        />
                        <TextField
                            required
                            fullWidth
                            id="outlined-required-age"
                            label="age"
                            name='age'
                            value={inputs.age}
                            inputProps={{ pattern: '[0-9]{1,3}$' }}
                            onChange={handleChange('age')}
                        />
                        </Stack>
                        <TextField
                            required
                            fullWidth
                            id="outlined-required-mobileNum"
                            label="mobileNum"
                            name='mobileNum'
                            value={inputs.mobileNum}
                            inputProps={{ pattern: '[0-9]{5,20}$' }}
                            onChange={handleChange('mobileNum')}
                        />
                        <TextField
                            required
                            fullWidth
                            id="outlined-required-requiredSeats"
                            label="requiredSeats"
                            name='requiredSeats'
                            value={inputs.requiredSeats}
                            inputProps={{ pattern: '[0-9]{1}$' }}
                            onChange={handleChange('requiredSeats')}
                        />
                        <TextField
                            required
                            fullWidth
                            id="outlined-required-flightId"
                            label="flightId"
                            name='flightId'
                            value={inputs.flightId}
                            inputProps={{ pattern: '[0-9]{1,16}$' }}
                            onChange={handleChange('flightId')}
                        />
                    
                        
                        <Button variant='contained' type='submit'>Submit</Button>
                    </Stack>
                </div>
            </form>
        )
    
}

export default Flightbooking;