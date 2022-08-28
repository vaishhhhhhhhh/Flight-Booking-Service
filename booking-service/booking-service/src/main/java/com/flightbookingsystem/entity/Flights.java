package com.flightbookingsystem.entity;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Flights {
	

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

}
