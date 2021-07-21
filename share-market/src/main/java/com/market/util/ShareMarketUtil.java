package com.market.util;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.BeanUtils;

import com.market.entites.CompanyEntity;
import com.market.vo.Company;

public class ShareMarketUtil {

	public static List<Company> createCompanies() {
		var companies = new ArrayList<Company>();
		long id = 1234L;
		companies.add(crreate("DMART", "D Mart", id));
		companies.add(crreate("IDFCFIRSTB", "IDFC First Bank", id++));
		companies.add(crreate("TATAPOWER", "TATA Power Ltd", id++));
		companies.add(crreate("TATACHEM", "TATA Chemicals ltd", id++));
		companies.add(crreate("DIXON", "DIXON", id++));
		companies.add(crreate("HCLTECH", "HCL Technologies ltc", id++));
		companies.add(crreate("JUBLFOOD", "Jublient Food ltd", id++));
		companies.add(crreate("TATAELXSI", "TATA Elixi", id++));
		return companies;
	}

	public static Company crreate(String code, String name, long id) {
		Company c1 = new Company();
		c1.setCode(code);
		c1.setId(id);
		c1.setName(name);
		return c1;
	}
	
	public static List<CompanyEntity> createCompanieEntites() {
		return createCompanies().stream()
				.map(c->copyProperties(c))
				.collect(Collectors.toList());
	}
	
	private static  CompanyEntity copyProperties(Company company) {
		var entity = new CompanyEntity();
		BeanUtils.copyProperties(company, entity);
		return entity;
	}

	
	
}
