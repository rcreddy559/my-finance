package com.sgxnifty.mutation;

import com.sgxnifty.vo.Sgxnifty;
import graphql.kickstart.tools.GraphQLResolver;

import java.util.List;

public class SgxMutation implements GraphQLResolver<Sgxnifty> {

    public List<Sgxnifty> saveSgxnifty(String sgx) {
        return List.of(new Sgxnifty(100L, "Welcome to SQX"));
    }
}
