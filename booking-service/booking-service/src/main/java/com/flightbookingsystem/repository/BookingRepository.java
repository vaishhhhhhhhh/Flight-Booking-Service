package com.flightbookingsystem.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.flightbookingsystem.entity.Booking;

@Repository
public interface BookingRepository extends MongoRepository<Booking, Integer>{

}
