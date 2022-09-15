package com.flightbookingsystem.service;

import java.util.List;

import com.flightbookingsystem.dto.FlightsDTO;
import java.util.Optional;

public interface FlightService {
	
	List<FlightsDTO> getFlights();
    FlightsDTO getFlight(Integer id);
    FlightsDTO newFlight(FlightsDTO flightsDTO);
    FlightsDTO updateFlight(Integer id, FlightsDTO flightsDTO);
    void deleteFlight(Integer id);
    void deleteAll();
	List<FlightsDTO> flightByOriginAndDestination(String origin, String destination);


}
