package com.market.repository;

import com.market.entites.VolumeShockersEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VolumeShockersRepository
        extends JpaRepository<VolumeShockersEntity, Long> {
}
