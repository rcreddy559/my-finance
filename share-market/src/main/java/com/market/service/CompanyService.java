package com.market.service;

import com.market.entites.CompanyEntity;
import com.market.repository.CompanyRepository;
import com.market.vo.Company;
import javassist.NotFoundException;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class CompanyService {

	private final CompanyRepository repository;

	CompanyService(CompanyRepository repository) {
		this.repository = repository;
	}

	public Company save(Company company) {
		var saveEntity = repository.save(copyProperties(company));
		BeanUtils.copyProperties(saveEntity, company);
		return company;
	}

	public List<Company> getAll() {
		var companies = repository.findAll();
		return companies.stream().map(this::copyProperties).collect(Collectors.toList());
	}

	public List<Company> save(List<Company> companies) {
		var entities = companies.stream().map(this::copyProperties).collect(Collectors.toList());
		var saveEntities = repository.saveAll(entities);
		return saveEntities.stream().map(this::copyProperties).collect(Collectors.toList());
	}

	private CompanyEntity copyProperties(Company company) {
		var entity = new CompanyEntity();
		BeanUtils.copyProperties(company, entity);
		return entity;
	}

	private Company copyProperties(CompanyEntity entity) {
		var company = new Company();
		BeanUtils.copyProperties(entity, company);
		return company;
	}

	public Company patch(Long id, Map<String, Object> company) throws NotFoundException {
		var companyOptional = repository.findById(id);
		if(companyOptional.isPresent()) {
			var companyEntity = companyOptional.get();
			for(Map.Entry e: company.entrySet()) {

				if ("name".equals(e.getKey())) {
					companyEntity.setName(String.valueOf(e.getValue()));
				} else if ("code".equals(e.getKey())) {
					companyEntity.setCode(e.getValue().toString());
				}
			}
			return copyProperties(repository.save(companyEntity));
		}

		throw new NotFoundException("Not found Company with id:" +id);

	}

	public void delete(long id) throws NotFoundException {
		var company = repository.findById(id);
		if (company.isEmpty())
			throw new NotFoundException("");
		company.ifPresent(repository::delete);
	}
}
