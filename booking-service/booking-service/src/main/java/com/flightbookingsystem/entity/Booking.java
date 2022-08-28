package com.flightbookingsystem.entity;

import java.time.LocalDateTime;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

import com.flightbookingsystem.dto.BookingDTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor

@Document(collection="details")
public class Booking {
	
	@Transient
    public static final String SEQUENCE_NAME = "users_sequence";
	
	@Id
	private int bookingId;	
	private String firstName;
	private String lastName;
	private String gender;
	private int age;
	private long mobileNum;
	private Integer requiredSeats;
	private int flightId;
	private Flights flights;
	@CreatedDate
	private LocalDateTime bookedDate;	
	
	public Booking(BookingDTO bookingDTO){
        this.bookingId = bookingDTO.getBookingId();
        this.firstName = bookingDTO.getFirstName();
        this.lastName = bookingDTO.getLastName();
        this.gender = bookingDTO.getGender();
        this.age = bookingDTO.getAge();
        this.mobileNum = bookingDTO.getMobileNum();
        this.requiredSeats = bookingDTO.getRequiredSeats();
        this.flightId = bookingDTO.getFlightId();
        this.flights = bookingDTO.getFlights();
        this.bookedDate = bookingDTO.getBookedDate();
       
    }
	
	public void bookedTime() {
		bookedDate=LocalDateTime.now();
	}

}
