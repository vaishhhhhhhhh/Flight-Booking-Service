package com.flightbookingsystem.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.flightbookingsystem.dto.BookingDTO;
import com.flightbookingsystem.service.BookingService;


@RestController
@RequestMapping("/booking")
public class BookingController {
	
	@Autowired
    private BookingService bookingService;
	

    @PostMapping("/create")
    public ResponseEntity<BookingDTO> createBooking(@Valid @RequestBody BookingDTO bookingDTO) {
        return new ResponseEntity<BookingDTO>(bookingService.newBooking(bookingDTO), HttpStatus.CREATED);
    }

    @GetMapping("/getAll")
    public List<BookingDTO> booking(){
        return bookingService.getBooking();
    }

    @GetMapping("/get/{id}")
    public BookingDTO bookingById(@PathVariable Integer id) {
        return bookingService.getBooking(id);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<BookingDTO> update(@PathVariable Integer id, @Valid @RequestBody BookingDTO bookingDTO) {
        return new ResponseEntity<BookingDTO>(bookingService.updateBooking(id, bookingDTO), HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/delete/{id}")
    public String delete(@PathVariable Integer id) {
    	bookingService.deleteBooking(id);
        return "Booking with ID: " + id + " was deleted successfully";
    }

    @DeleteMapping("/deleteAll")
    public String deleteAll() {
    	bookingService.deleteAll();
        return "All bookings were deleted successfully";
    }


}
