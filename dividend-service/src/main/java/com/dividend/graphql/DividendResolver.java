package com.dividend.graphql;

import java.util.List;

import com.dividend.vo.Dividend;

import graphql.kickstart.tools.GraphQLQueryResolver;
import org.springframework.stereotype.Component;

@Component
public class DividendResolver implements GraphQLQueryResolver {
    
    public List<Dividend> getDividends() {
        return List.of();
    }
}
