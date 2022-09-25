import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import CircularProgress from '@mui/material/CircularProgress';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';

import { Stack, Typography } from '@mui/material';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


const Allflightdetails = () => {
    const [open, setOpen] = React.useState(false);
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [flights, setFlights] = useState([]);

    const url = "http://localhost:8080/flight/getAll"

    const deleteUrl = "http://localhost:8080/flight/delete/"

    const handleDelete = flight => {
        <alert >
                    Flight deleted successfully!
                </alert>
        console.log(flight.flightId)
        axios.delete(deleteUrl + flight.flightId)
            .then((res) => {
                console.log(res.data)
                setOpen(true);
            }).catch((error) => {
                console.log(error)
            });}

    useEffect(() => {
        axios.get(url)
            .then(res => {
                console.log(res.data);
                setFlights(res.data);
                setIsLoaded(true);
            })
            .then(
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <Stack>
                <FlightTakeoffIcon sx={{ mb: 1, fontSize: '150%', color: 'black' }} />
                <Typography sx={{ mb: 2 }} component='h1' variant='h4' color='black' align='left'>
                   Complete  Flight details
                </Typography>
                <TableContainer component={Paper} elevation={5} sx={{ maxHeight: 400 }} >
                    <Table sx={{ minWidth: 800 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Flight ID</TableCell>
                                <TableCell>FlightName</TableCell>
                                <TableCell>Departure Time</TableCell>
                                <TableCell>Arrival Time</TableCell>
                                <TableCell>Departure Date</TableCell>
                                <TableCell>Arrival Date</TableCell>
                                <TableCell align="right">Seats</TableCell>
                                <TableCell align="right">Fare</TableCell>
                                <TableCell>Delete details</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {flights.map((flight) => (
                                <TableRow
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    key={flight.flightId}
                                >    <TableCell>{flight.flightId}</TableCell>
                                    <TableCell component="th" scope="row">
                                        {flight.flightName}
                                    </TableCell>
                                    <TableCell>{flight.departureTime}</TableCell>
                                    <TableCell>{flight.arrivalTime}</TableCell>
                                    <TableCell>{flight.departureDate}</TableCell>
                                    <TableCell>{flight.arrivalDate}</TableCell>
                                    <TableCell align="right">{flight.seats}</TableCell>
                                    <TableCell align="right"><CurrencyRupeeIcon fontSize='inherit' />{flight.fare}</TableCell>
                                    <TableCell><Button size='small' variant='contained' color="error" onClick={() => handleDelete(flight)}>
                                    Delete
                                    </Button></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                     deleted successfully!
                </Alert>
            </Snackbar>
            </Stack>
        );
    }
}
export default Allflightdetails;
