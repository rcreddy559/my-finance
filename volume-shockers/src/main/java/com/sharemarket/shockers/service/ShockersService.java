package com.sharemarket.shockers.service;

import org.springframework.stereotype.Component;
import java.util.List;
import java.util.stream.Collectors;

import com.sharemarket.shockers.vo.Shockers;
import com.sharemarket.shockers.vo.ShockersEntity;

@Component
public class ShockersService {

    private final ShockersRepository repository;
    public ShockersService(ShockersRepository repository){
        this.repository = repository;
    }

    public void save(List<Shockers> shockers) {
        var shockerList = shockers.stream()
                .map(Shockers::of)
                .collect(Collectors.toList());
        repository.saveAll(shockerList);
    }

    public List<Shockers> get() {
        List<ShockersEntity> shockers = repository.findAll();
        return shockers.stream().map(Shockers::of).collect(Collectors.toList());
    }
}
