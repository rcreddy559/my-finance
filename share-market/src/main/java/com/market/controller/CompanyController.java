package com.market.controller;

import java.util.List;
import java.util.Map;

import javassist.NotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.market.service.CompanyService;
import com.market.vo.Company;


@RestController
@RequestMapping("/api/v1/company")
public class CompanyController {
	
	final private CompanyService companyService;
	public CompanyController(CompanyService service) {
		companyService = service;
	}
	
	@GetMapping
	public List<Company> getAll() {
		return companyService.getAll(); 
	}

	@PostMapping
	public Company save(@RequestBody Company company) {
		return companyService.save(company);
	}

	@PutMapping
	public Company update(@RequestBody Company company) {
		return companyService.save(company);
	}

	@PatchMapping("/{id}")
	public ResponseEntity<Company> patch(@PathVariable Long id, @RequestBody Map<String, Object> company) {
		try {
			return ResponseEntity.ok(companyService.patch(id, company));
		} catch (NotFoundException e) {
			e.printStackTrace();
			return new ResponseEntity(HttpStatus.NOT_FOUND, HttpStatus.valueOf(e.getLocalizedMessage()));
		}
	}

	@DeleteMapping("/{id}")
	public ResponseEntity delete(@PathVariable long id) {
		try {
			companyService.delete(id);
			return ResponseEntity.ok().build();
		} catch (NotFoundException e) {
			e.printStackTrace();
			return new ResponseEntity<>(HttpStatus.NOT_FOUND, HttpStatus.valueOf(e.getLocalizedMessage()));
		}
	}

}