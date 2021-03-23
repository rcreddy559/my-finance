package com.market.resolver.shares;

import com.market.service.CompanyService;
import com.market.vo.Company;
import com.market.vo.Share;
import graphql.kickstart.tools.GraphQLQueryResolver;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class ShareResolver implements GraphQLQueryResolver {

    private final CompanyService service;
    public ShareResolver(CompanyService service) {
        this.service = service;
    }
    public Share getShares() {
        return new Share("HCL", "", "", "", "");
    }
    public Share getShare() {
        return new Share("TCS", "", "", "", "");
    }
    public List<Company> getCompanies() {
        return service.getAll();
    }
}
