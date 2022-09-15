import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const Flightdetails = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [flights, setFlights] = useState([]);

    const url = "http://localhost:8080/flight/getAll"
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
            <div>
                <h1>Flight Details</h1>
                <table className='table table-striped table-bordered'>
                    <thead>
                        <tr>
                            <th> FlightName</th>
                            <th>Origin</th>
                            <th> Destination</th>
                            <th> Departuretime</th>
                            <th> Arrivaltime </th>
                            <th> Departuredate </th>
                            <th> Arrivaldate</th>
                            <th> Seats</th>
                            <th> Fare</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            flights.map(val =>
                              <tr key={val.flightId}>
                                  <td>{val.flightName}</td>
                                  <td>{val.origin}</td>
                                  <td>{val.destination}</td>
                                  <td>{val.departureTime}</td>
                                  <td>{val.arrivalTime}</td>
                                  <td>{val.departureDate}</td>
                                  <td>{val.arrivalDate}</td>
                                  <td>{val.seats}</td>
                                  <td>{val.fare}</td>
                              </tr>
                            )
                        }
                    </tbody>
                </table>
                <Link to="/register"><button>Login</button>
                </Link>
            </div>
        );
    }
}
export default Flightdetails;


          
          