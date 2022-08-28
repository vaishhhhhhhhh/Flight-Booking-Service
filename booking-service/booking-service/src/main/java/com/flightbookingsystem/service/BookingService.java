package com.flightbookingsystem.service;

import java.util.List;

import com.flightbookingsystem.dto.BookingDTO;

public interface BookingService {

	List<BookingDTO> getBooking();

	BookingDTO getBooking(Integer id);

	BookingDTO newBooking(BookingDTO bookingDTO);

	BookingDTO updateBooking(Integer id, BookingDTO bookingDTO);

	void deleteBooking(Integer id);

	void deleteAll();

}
