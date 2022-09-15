package com.flightbookingsystem.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;
import static org.springframework.data.mongodb.core.query.Criteria.where;

import java.util.Objects;

import static org.springframework.data.mongodb.core.FindAndModifyOptions.options;


import com.flightbookingsystem.entity.DatabaseSequence;

@Service
public class SequenceGeneratorService {
	
	 @Autowired
	    private MongoOperations mongoOperations;

	    public int getSequenceNumber(String sequenceName) {

	        DatabaseSequence counter = mongoOperations.findAndModify(Query.query(where("_id").is(sequenceName)),
	                new Update().inc("sequence", 1), options().returnNew(true).upsert(true),
	                DatabaseSequence.class);
//	        //Get sequence number
//	        Query query = new Query(Criteria.where("flightId").is(sequenceName));
//	        //Update sequence number
//	        Update update = new Update().inc("sequence", 1);
//	        //Modify in document
//	        DbSequence counter = mongoOperations
//	                .findAndModify(query, update, options().returnNew(true).upsert(true), DbSequence.class);

	        return !Objects.isNull(counter) ? counter.getSequence() : 1;
	    }
	}


