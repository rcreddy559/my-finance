package com.sharemarket.shockers.graphql;

import graphql.kickstart.tools.GraphQLMutationResolver;
import org.springframework.stereotype.Component;
import java.util.stream.Collectors;
import java.util.stream.Stream;
import com.sharemarket.shockers.service.ShockersService;
import com.sharemarket.shockers.vo.Shockers;

@Component
public class ShockersMutation implements GraphQLMutationResolver {
    private final ShockersService service;

    ShockersMutation(ShockersService service) {
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

    private Shockers convert(String s) {
        return Shockers.of(s.split("\\|"));
    }
}
