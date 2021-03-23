package com.sharemarket.shockers.vo;

import java.time.LocalDate;
import javax.persistence.*;

@Entity
@Table(name = "volumeShockers")
public class ShockersEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long Id;
    private LocalDate date;
    private String companyName;
    private String sector;
    private Double lastPrice;
    private Double percentageChg;
    private Long volume;
    private Long volumeChg;

    public ShockersEntity(){}

    public ShockersEntity(LocalDate date, String companyName, String sector, Double lastPrice, Double percentageChg, Long volume, Long volumeChg) {
        this.date = date;
        this.companyName = companyName;
        this.sector = sector;
        this.lastPrice = lastPrice;
        this.percentageChg = percentageChg;
        this.volume = volume;
        this.volumeChg = volumeChg;
    }

    public ShockersEntity(Long id, LocalDate date, String companyName, String sector, Double lastPrice, Double percentageChg, Long volume, Long volumeChg) {
        Id = id;
        this.date = date;
        this.companyName = companyName;
        this.sector = sector;
        this.lastPrice = lastPrice;
        this.percentageChg = percentageChg;
        this.volume = volume;
        this.volumeChg = volumeChg;
    }

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getSector() {
        return sector;
    }

    public void setSector(String sector) {
        this.sector = sector;
    }

    public Double getLastPrice() {
        return lastPrice;
    }

    public void setLastPrice(Double lastPrice) {
        this.lastPrice = lastPrice;
    }

    public Double getPercentageChg() {
        return percentageChg;
    }

    public void setPercentageChg(Double percentageChg) {
        this.percentageChg = percentageChg;
    }

    public Long getVolume() {
        return volume;
    }

    public void setVolume(Long volume) {
        this.volume = volume;
    }

    public Long getVolumeChg() {
        return volumeChg;
    }

    public void setVolumeChg(Long volumeChg) {
        this.volumeChg = volumeChg;
    } 
}
