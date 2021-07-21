package com.market.controller;

import com.market.service.StockService;
import com.market.vo.Stock;
import javassist.NotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/stock")
public class StockController {

    private final StockService stockService;

    StockController(StockService stockService) {
        this.stockService = stockService;
    }

    @GetMapping
    public List<Stock> getAll() {
        return stockService.getAll();
    }

    @PostMapping
    @PutMapping
    public Stock save(@RequestBody Stock stock) {
        return stockService.save(stock);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<Stock> patch(@RequestParam Long id, @RequestBody Map<String, Object> stockMap){
        try {
            return ResponseEntity.ok(stockService.patch(id, stockMap));
        } catch (NotFoundException e) {
            e.printStackTrace();
            return new ResponseEntity(HttpStatus.NOT_FOUND, HttpStatus.valueOf(e.getLocalizedMessage()));
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity delete(@PathVariable long id) {
        try {
            stockService.delete(id);
            return ResponseEntity.ok().build();
        } catch (NotFoundException e) {
            e.printStackTrace();
            return new ResponseEntity(HttpStatus.NOT_FOUND, HttpStatus.valueOf(e.getLocalizedMessage()));
        }
    }

}
