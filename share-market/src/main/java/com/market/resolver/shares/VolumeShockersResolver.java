package com.market.resolver.shares;

import com.market.service.VolumeShockersService;
import com.market.vo.VolumeShockers;
import graphql.kickstart.tools.GraphQLQueryResolver;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class VolumeShockersResolver implements GraphQLQueryResolver {
    private final VolumeShockersService service;
    public VolumeShockersResolver(VolumeShockersService service) {
        this.service = service;
    }

    public List<VolumeShockers> getVolumeShockers() {
        return service.get();
    }
}
