package com.market.service;

import com.market.entites.CompanyEntity;
import com.market.repository.CompanyRepository;
import com.market.vo.Company;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class CompanyService {

    private final CompanyRepository repository;
    CompanyService(CompanyRepository repository) {
        this.repository = repository;
    }

    public Company save(Company company) {
        var entity = new CompanyEntity();
        BeanUtils.copyProperties(company, entity);
        var saveEntity = repository.save(entity);
        BeanUtils.copyProperties(saveEntity, company);
        return company;
    }

    public List<Company> getAll() {
        var companies = repository.findAll();
        return companies.stream().map(Company::new).collect(Collectors.toList());
    }
}
