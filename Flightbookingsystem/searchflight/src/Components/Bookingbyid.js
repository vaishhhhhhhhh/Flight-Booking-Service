import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import { useLocation } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import CircularProgress from "@mui/material/CircularProgress";
import PersonIcon from "@mui/icons-material/Person";

import { Stack, Typography } from "@mui/material";

export default function Bookingbyid () {
  const location = useLocation();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [booking, setBookings] = useState([]);

  console.log(location.state.bookingId);

  useEffect(() => {
    axios.get("http://localhost:8081/booking/get/" + location.state.bookingId)
      .then((res) => {
        console.log(res.data);
        setBookings(res.data);
        console.log(booking);
        setIsLoaded(true);
      })
      .then((error) => {
        setIsLoaded(true);
        setError(error);
      })
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return (
      <Stack sx={{ width: 850, display: "flex", alignItems: "center" }}>
        <CircularProgress />
      </Stack>
    );
  } else if (booking.length === 0) {
    return (
      <Stack sx={{ width: 850, display: "flex" }}>
        <PersonIcon sx={{ mb: 1, fontSize: "150%", color: "black" }} />
        <Typography component="h1" variant="caption" color="black" align="left">
          Booking details
        </Typography>
      </Stack>
    );
  } else {
    return (
      <Stack>
        <PersonIcon sx={{ mb: 1, fontSize: "150%", color: "black" }} />
        <Typography component="h1" variant="caption" color="black" align="left">
          details
        </Typography>
        <TableContainer component={Paper} elevation={5} sx={{ maxHeight: 400 }}>
          <Table sx={{ minWidth: 800 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>booking ID</TableCell>
                <TableCell>FirstName</TableCell>
                <TableCell>LastName</TableCell>
                <TableCell>Gender</TableCell>
                <TableCell>Age</TableCell>
                <TableCell>Mobile number</TableCell>
                <TableCell>Required Seats</TableCell>
                <TableCell>Flight id</TableCell>
                <TableCell>Flight name</TableCell>
                <TableCell>Departure Time</TableCell>
                <TableCell>Arrival Time</TableCell>
                <TableCell>Departure Date</TableCell>
                <TableCell>Arrival Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {booking.map((flight) => (
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  key={flight.bookingId}
                >
                 
                  <TableCell component="th" scope="row">{flight.bookingId}</TableCell>
                  <TableCell>{flight.firstName}</TableCell>
                  <TableCell>{flight.lastName}</TableCell>
                  <TableCell>{flight.gender}</TableCell>
                  <TableCell>{flight.age}</TableCell>
                  <TableCell>{flight.mobileNum}</TableCell>
                  <TableCell>{flight.requiredSeats}</TableCell>
                  <TableCell>{flight.flightId}</TableCell>
                  <TableCell>{flight.flights.flightName}</TableCell>
                  <TableCell>{flight.flights.departureTime}</TableCell>
                  <TableCell>{flight.flights.arrivalTime}</TableCell>
                  <TableCell>{flight.flights.departureDate}</TableCell>
                  <TableCell>{flight.flights.arrivalDate}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
    );
  }
};

