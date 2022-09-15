package com.flightbookingsystem.dto;

import java.util.Date;
import java.util.List;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.flightbookingsystem.entity.Flights;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class FlightsDTO {

    private int flightId;

    @NotBlank(message = "Flight name cannot be blank or null")
    @Size(min = 3, max = 30)
    private String flightName;

    @NotBlank(message = "Origin cannot be blank or null")
    @Size(min = 3, max = 30)
    private String origin;

    @NotBlank(message = "Destination cannot be blank or null")
    @Size(min = 3, max = 30)
    private String destination;

    @NotBlank(message = "Departure time cannot be blank or null")
    @Size(min = 3, max = 30)
    private String departureTime;

    @NotBlank(message = "Arrival time cannot be blank or null")
    @Size(min = 3, max = 30)
    private String arrivalTime;
    
    
    private String departureDate;
    
    
    private String arrivalDate;

    @NotNull
    private Integer seats;

    @NotNull
    private Integer fare;

    public FlightsDTO(Flights flights){
        this.flightId = flights.getFlightId();
        this.flightName = flights.getFlightName();
        this.origin = flights.getOrigin();
        this.destination = flights.getDestination();
        this.departureTime = flights.getDepartureTime();
        this.arrivalTime = flights.getArrivalTime();
        this.departureDate = flights.getDepartureDate();
        this.arrivalDate = flights.getArrivalDate();
        this.seats = flights.getSeats();
        this.fare = flights.getFare();
    }
}


