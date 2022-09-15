package com.flightbookingsystem.entity;


import org.springframework.data.annotation.Transient;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import com.flightbookingsystem.dto.FlightsDTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor

@Document(collection="details")
public class Flights {
	
	@Transient
    public static final String SEQUENCE_NAME = "users_sequence";

    @Id
    private int flightId;
    
    private String flightName;
   
    private String origin;
  
    private String destination;
    
    private String departureTime;
    
    private String arrivalTime;
    
    private String departureDate;
    
    private String arrivalDate;
    
    private Integer seats;
   
    private Integer fare;

    public Flights(FlightsDTO flightsDTO){
        this.flightId = flightsDTO.getFlightId();
        this.flightName = flightsDTO.getFlightName();
        this.origin = flightsDTO.getOrigin();
        this.destination = flightsDTO.getDestination();
        this.departureTime = flightsDTO.getDepartureTime();
        this.arrivalTime = flightsDTO.getArrivalTime();
        this.departureDate = flightsDTO.getDepartureDate();
        this.arrivalDate = flightsDTO.getArrivalDate();
        this.seats = flightsDTO.getSeats();
        this.fare = flightsDTO.getFare();
    }
}
