package com.sharemarket.shockers.service;

import com.sharemarket.shockers.vo.ShockersEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ShockersRepository
        extends JpaRepository<ShockersEntity, Long> {
}
