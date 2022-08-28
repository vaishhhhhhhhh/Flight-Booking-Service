package com.flightbookingsystem.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.flightbookingsystem.entity.Flights;

@Service
public class FlightsInfo {
	
	@Autowired
    private RestTemplate restTemplate;

    //@HystrixCommand(fallbackMethod = "getFallbackFlightDetails")
    public Flights getflight(int flightId) {
        Flights flights = restTemplate.getForObject("http://search-service/flight/get/" + flightId,
                Flights.class);
        return flights;
    }
	
	

}
