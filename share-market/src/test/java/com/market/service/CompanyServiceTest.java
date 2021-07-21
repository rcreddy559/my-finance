package com.market.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

import com.market.repository.CompanyRepository;
import com.market.util.ShareMarketUtil;
import com.market.vo.Company;

@ExtendWith(MockitoExtension.class)
public class CompanyServiceTest {
	
	@InjectMocks
	CompanyService companyService;
	
	@Mock
	CompanyRepository companyRepository;
	
	
	@Test
	void testFindAll() {
		var companieEntities = ShareMarketUtil.createCompanieEntites();
		Mockito.when(companyRepository.findAll()).thenReturn(companieEntities);
		List<Company> companies = companyService.getAll();
		assertEquals(companies.size(), companieEntities.size());
	}
	
	@Test
	void test() {
		assertTrue(true);
	}
	
}
