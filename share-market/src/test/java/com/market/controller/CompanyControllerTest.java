package com.market.controller;

import java.util.ArrayList;

import org.hamcrest.Matchers;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;


import com.market.service.CompanyService;
import com.market.vo.Company;


//@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
@ExtendWith(SpringExtension.class)
@WebMvcTest(CompanyController.class)
public class CompanyControllerTest {
	
//	@Autowired
//	private TestRestTemplate restTemplate;
//	
//	@Test
//	@DisplayName("/api/v1/company")
//	void getAllCompanies_test() {
////		assertTrue(true);
//		URI targetURI = UriComponentsBuilder.fromUriString("//api/v1/company")
//				.build()
//				.encode()
//				.toUri();
//		
//		List contries = restTemplate.getForObject(targetURI, List.class);
//		contries.forEach(System.out::println);
//		assertNotNull(contries);
//	}
	
	@MockBean
	CompanyService companyService;
	
	@Autowired
	MockMvc mockMvc;
	
	@Test
	void testfindAll() throws Exception {
		var companies = new ArrayList<Company>();
		Company company = new Company("Tata conseltancy service ltd", "TCS");
		companies.add(company);
		Mockito.when(companyService.getAll()).thenReturn(companies);
		
		mockMvc.perform(get("/api/v1/company"))
				.andExpect(status().isOk())
				.andExpect(jsonPath("$[0].name", Matchers.is(company.getName())))
				.andExpect(jsonPath("$[0].code", Matchers.is(company.getCode())));
	}

}
