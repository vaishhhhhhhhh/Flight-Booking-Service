package com.flightbookingsystem.dto;

import java.time.LocalDateTime;
import java.util.Date;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.springframework.data.annotation.Id;

import com.flightbookingsystem.entity.Booking;
import com.flightbookingsystem.entity.Flights;
import com.flightbookingsystem.dto.BookingDTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BookingDTO {
	
	@Id
	private int bookingId;
	
	@NotBlank(message = "Passenger firstname cannot be blank or null")
    @Size(min = 3, max = 30)
	private String firstName;
	
	@NotBlank(message = "Passenger lastname cannot be blank or null")
    @Size(min = 3, max = 30)
	private String lastName;
	
	@NotBlank(message = "Passenger gender cannot be blank or null")
    @Size(min = 3, max = 30)
	private String gender;
	
	@NotNull
	private int age;
	
	@NotNull
	private long mobileNum;
	
	@NotNull
    private Integer requiredSeats;
	
	@NotNull
	private int flightId;
	
	private Flights flights;
	
	private LocalDateTime bookedDate;	
	
	
	public BookingDTO(Booking booking){
        this.bookingId = booking.getBookingId();
        this.firstName = booking.getFirstName();
        this.lastName = booking.getLastName();
        this.gender = booking.getGender();
        this.age = booking.getAge();
        this.mobileNum = booking.getMobileNum();
        this.requiredSeats = booking.getRequiredSeats();
        this.flightId = booking.getFlightId();
        this.flights = booking.getFlights();
        this.bookedDate = booking.getBookedDate();
       
    }

}
