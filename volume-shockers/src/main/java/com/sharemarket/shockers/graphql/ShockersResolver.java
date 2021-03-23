package com.sharemarket.shockers.graphql;

import com.sharemarket.shockers.service.ShockersService;
import com.sharemarket.shockers.vo.Shockers;
import graphql.kickstart.tools.GraphQLQueryResolver;
import org.springframework.stereotype.Component;
import java.util.List;

@Component
public class ShockersResolver implements GraphQLQueryResolver {
    private final ShockersService service;
    public ShockersResolver(ShockersService service) {
        this.service = service;
    }

    public List<Shockers> getVolumeShockers() {
        return service.get();
    }
}
