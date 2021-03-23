package com.market.vo;

import com.market.entites.CompanyEntity;

public class Company {
    private Long id;
    private String name;
    private String code;
    public Company() {}
    public Company(String name) {
        this.name = name;
    }

    public Company(CompanyEntity companyEntity) {
        this.id = companyEntity.getId();
        this.name = companyEntity.getName();
        this.code = companyEntity.getCode();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }
}
