package com.market;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.market.service.CompanyService;
import com.market.util.ShareMarketUtil;

@SpringBootApplication
public class ShareMarketApplication implements ApplicationRunner {

	public static void main(String[] args) {
		SpringApplication.run(ShareMarketApplication.class, args);
	}

	@Autowired
	CompanyService service;

	@Override
	public void run(ApplicationArguments args) throws Exception {
		service.save(ShareMarketUtil.createCompanies());
	}


}
