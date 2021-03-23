package com.dividend.graphql;
import java.util.List;

import com.dividend.vo.Dividend;

import graphql.kickstart.tools.GraphQLMutationResolver;
import org.springframework.stereotype.Component;

@Component
public class DividendMutation implements GraphQLMutationResolver {
    
    public List<Dividend> saveDividend(String[] dividends) {
        
        return List.of();
    }
}
