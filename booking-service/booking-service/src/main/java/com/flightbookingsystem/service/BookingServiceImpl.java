package com.flightbookingsystem.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.flightbookingsystem.dto.BookingDTO;
import com.flightbookingsystem.entity.Booking;
import com.flightbookingsystem.exception.BookingNotFoundException;
import com.flightbookingsystem.repository.BookingRepository;


@Service
public class BookingServiceImpl implements BookingService {
	
	@Autowired
    private BookingRepository bookingRepository;
    //Get all booking details
	
	 @Autowired
	    private SequenceGeneratorService sequenceGeneratorService;
	 
	 @Autowired
	    private FlightsInfo flightsInfo;
	
	@Override
    public List<BookingDTO> getBooking() {
        List<Booking> booking = bookingRepository.findAll();
        return booking.stream().map(BookingDTO::new).collect(Collectors.toList());
    }
    //Find booking by ID
    @Override
    public BookingDTO getBooking(Integer id) {
    	Booking booking = bookingRepository.findById(id)
                .orElseThrow(() -> new BookingNotFoundException("Booking does not exist with id: " + id));
        return new BookingDTO(booking);
    }
    //book new flight
    @Override
    public BookingDTO newBooking(BookingDTO bookingDTO) {
    	Booking booking = new Booking(bookingDTO);
    	booking.setBookingId(sequenceGeneratorService.getSequenceNumber(Booking.SEQUENCE_NAME));
    	booking.setFlights(flightsInfo.getflight(booking.getFlightId()));
    	booking.bookedTime();
        return new BookingDTO(bookingRepository.save(booking));
    }
    //Update flight
    @Override
    public BookingDTO updateBooking(Integer id, BookingDTO bookingDTO) {
    	Booking booking =bookingRepository.findById(id)
                .orElseThrow(() -> new BookingNotFoundException("Booking does not exist with id: " + id));

        
        Optional<Booking> optionalBooking = bookingRepository.findById(id);
        bookingRepository.delete(booking);

        if (optionalBooking.isPresent()) {
        	Booking bookingSave = optionalBooking.get();

        	bookingSave.setBookingId(booking.getBookingId());
        	bookingSave.setFirstName(bookingDTO.getFirstName() != null ? bookingDTO.getFirstName() : bookingSave.getFirstName());
        	bookingSave.setLastName(bookingDTO.getLastName() != null ? bookingDTO.getLastName() : bookingSave.getLastName());
        	bookingSave.setGender(bookingDTO.getGender() != null ? bookingDTO.getGender() : bookingSave.getGender());
        	bookingSave.setAge(bookingDTO.getAge());
        	bookingSave.setMobileNum(bookingDTO.getMobileNum());
        	bookingSave.setRequiredSeats(bookingDTO.getRequiredSeats() != null ? bookingDTO.getRequiredSeats() : bookingSave.getRequiredSeats());
        	bookingSave.setFlightId(bookingDTO.getFlightId());
        	bookingSave.setFlights(flightsInfo.getflight(bookingSave.getFlightId()));
        	bookingSave.setBookedDate(booking.getBookedDate());

        	bookingRepository.save(bookingSave);
            return new BookingDTO(bookingSave);
        }

        return new BookingDTO(booking);
    }
    //Delete flight with given ID
    @Override
    public void deleteBooking(Integer id) {
    	Booking booking = bookingRepository.findById(id)
                .orElseThrow(() -> new BookingNotFoundException("Booking does not exist with id: " + id));
    	bookingRepository.delete(booking);
    }
    //Delete all flights
    @Override
    public void deleteAll() {
    	bookingRepository.deleteAll();
    } 

}



