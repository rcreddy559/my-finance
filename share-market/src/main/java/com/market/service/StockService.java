package com.market.service;

import com.market.entites.CompanyEntity;
import com.market.entites.StockEntity;
import com.market.repository.CompanyRepository;
import com.market.repository.StockRepository;
import com.market.vo.Stock;
import javassist.NotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class StockService {
    private final StockRepository stockRepository;
    private final CompanyRepository companyRepository;

    StockService(StockRepository stockRepository, CompanyRepository companyRepository) {
        this.stockRepository = stockRepository;
        this.companyRepository = companyRepository;
    }

    public Stock save(Stock stock) {
        return copy(stockRepository.save(copy(stock)));
    }

    public List<Stock> getAll() {
        var stocks = stockRepository.findAll();
        return stocks.stream()
                .map(this::copy)
                .collect(Collectors.toList());
    }

    public Stock copy(StockEntity entity) {
        var stock = new Stock();
        stock.setId(entity.getId());
        stock.setAvgPrice(entity.getAvgPrice());
        stock.setCompanyName(entity.getCompany().getCode());
        stock.setCompanyId(entity.getCompany().getId());
        stock.setLtp(entity.getLtp());
        stock.setQuantity(entity.getQuantity());
        var currentValue = entity.getQuantity()*entity.getAvgPrice();
        var buyValue = entity.getQuantity()*entity.getLtp();

        stock.setCurrentValue(currentValue);
        stock.setPl(buyValue-currentValue);
        return stock;
    }

    public StockEntity copy(Stock stock) {
        var company = companyRepository.findById(stock.getCompanyId());
        var entity = new StockEntity();
        company.ifPresent(entity::setCompany);
        entity.setQuantity(stock.getQuantity());
        entity.setLtp(stock.getLtp());
        entity.setAvgPrice(stock.getAvgPrice());
        return entity;
    }

    public Stock patch(Long id, Map<String, Object> stockMap) throws NotFoundException {
        var companyOptional = stockRepository.findById(id);
        if(companyOptional.isPresent()) {
            var stock = companyOptional.get();
            for(Map.Entry e: stockMap.entrySet()) {

                if ("quantity".equals(e.getKey())) {
                    stock.setQuantity((long) e.getValue());
                } else if ("avgPrice".equals(e.getKey())) {
                    stock.setAvgPrice((Double) e.getValue());
                } else if("ltp".equals(e.getKey())) {
                    stock.setLtp((Double)e.getValue());
                }
            }
            return copy(stockRepository.save(stock));
        }

        throw new NotFoundException("Not found Company with id:" +id);

    }

    public void delete(long id)  throws NotFoundException {
        var company = companyRepository.findById(id);
        if (company.isEmpty())
             throw new NotFoundException("");
        company.ifPresent(companyRepository::delete);
    }
}
