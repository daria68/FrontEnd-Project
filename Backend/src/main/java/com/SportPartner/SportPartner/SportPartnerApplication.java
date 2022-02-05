package com.SportPartner.SportPartner;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;


@SpringBootApplication//(exclude = {DataSourceAutoConfiguration.class })
public class SportPartnerApplication {

	public static void main(String[] args) {

		SpringApplication.run(SportPartnerApplication.class, args);
	}

}
