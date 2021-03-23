package com.market.service;

import com.market.entites.VolumeShockersEntity;
import com.market.repository.VolumeShockersRepository;
import com.market.vo.VolumeShockers;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class VolumeShockersService {

    private final VolumeShockersRepository repository;
    public VolumeShockersService(VolumeShockersRepository repository){
        this.repository = repository;
    }

    public void save(List<VolumeShockers> shockers) {
        var shockerList = shockers.stream()
                .map(VolumeShockers::of)
                .collect(Collectors.toList());
        repository.saveAll(shockerList);
    }

    public List<VolumeShockers> get() {
        List<VolumeShockersEntity> shockers = repository.findAll();
        return shockers.stream().map(VolumeShockers::of).collect(Collectors.toList());
    }
}
