package com.flightbookingsystem.searchhservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;


@ComponentScan(basePackages = "com.flightbookingsystem.entity")
@ComponentScan(basePackages = "com.flightbookingsystem.controller")
@ComponentScan(basePackages = "com.flightbookingsystem.service")
@ComponentScan(basePackages = "com.flightbookingsystem.dto")
@EnableEurekaClient
@EnableMongoRepositories("com.flightbookingsystem.repository")
@SpringBootApplication
public class SearchhServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(SearchhServiceApplication.class, args);
	}

}
