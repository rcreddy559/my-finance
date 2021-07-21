package com.market.repository;

import com.market.entites.StockEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StockRepository extends JpaRepository< StockEntity, Long> {
}
