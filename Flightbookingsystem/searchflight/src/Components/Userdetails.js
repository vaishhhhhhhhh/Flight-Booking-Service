import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
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
import PersonIcon from '@mui/icons-material/Person';
import { Stack, Typography } from '@mui/material';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Userdetails = () => {
    const [open, setOpen] = React.useState(false);
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    const location = useLocation()
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [flights, setFlights] = useState([]);
    const [user, setUser] = useState([]);

    let config = {
        headers: {
            Authorization: "Bearer " + location.state.jwt
        }
    }

    const url = "http://localhost:8083/users/getAll"

    const deleteUrl = "http://localhost:8083/users/delete/"

    const handleDelete = user => {
        console.log(user.userId)
        axios.delete(deleteUrl + user.userId, config)
            .then((res) => {
                console.log(res.data)
                setOpen(true);
            }).catch((error) => {
                console.log(error)
            });
    }

    useEffect(() => {
        axios.get(url, config)
            .then(res => {
                console.log(res.data);
                setUser(res.data);
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
            <PersonIcon sx={{ mb: 1, fontSize: '150%', color: 'black' }} />
            <Typography sx={{ mb: 2 }} component='h1' variant='h4' color='black' align='left'>
               Complete  Users details
            </Typography>
            <TableContainer component={Paper} elevation={5} sx={{ maxHeight: 400 }} >
                <Table sx={{ minWidth: 800 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>User ID</TableCell>
                            <TableCell>Username</TableCell>
                            <TableCell>Mobile number </TableCell>
                            <TableCell>Email ID</TableCell>
                            <TableCell>Delete details</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {user.map((users) => (
                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                key={users.userId}
                            >    <TableCell>{users.userId}</TableCell>
                                <TableCell component="th" scope="row">
                                    {users.username}
                                </TableCell>
                                <TableCell>{users.phoneNo}</TableCell>
                                <TableCell>{users.email}</TableCell>
                                <TableCell>
                                <Button size='small' variant='contained' color="error" onClick={() => handleDelete(users)}>
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
export default Userdetails;