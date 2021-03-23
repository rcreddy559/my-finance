package com.market.mutation.shares;

import com.market.service.VolumeShockersService;
import com.market.vo.VolumeShockers;
import graphql.kickstart.tools.GraphQLMutationResolver;
import org.springframework.stereotype.Component;

import java.util.stream.Collectors;
import java.util.stream.Stream;

@Component
public class VolumeShockersMutation implements GraphQLMutationResolver {
    private final VolumeShockersService service;

    VolumeShockersMutation(VolumeShockersService service) {
        this.service = service;
    }
    public String saveVolumeShockers(String[] volumes) {
        if(volumes != null &&
                volumes.length > 0) {

            var resolvers = Stream.of(volumes)
                    .filter(s -> !s.isEmpty())
                    .map(this::convert)
                    .collect(Collectors.toList());
            service.save(resolvers);
        }

        return "ResponseEntity.ok()";
    }

    private VolumeShockers convert(String s) {
        return VolumeShockers.of(s.split("\\|"));
    }
}
