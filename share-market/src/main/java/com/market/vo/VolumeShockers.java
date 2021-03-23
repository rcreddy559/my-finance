package com.market.vo;

import com.market.entites.VolumeShockersEntity;
import com.market.utils.MarketUtil;
import java.time.LocalDate;

public class VolumeShockers {
    private Long id;
    private LocalDate date;
    private String companyName;
    private String sector;
    private Double lastPrice;
    private Double percentageChg;
    private Long volume;
    private Long volumeChg;

    public VolumeShockers() { }

    public VolumeShockers(Long id, LocalDate date, String companyName, String sector, Double lastPrice, Double percentageChg, Long volume, Long volumeChg) {
        this.id = id;
        this.date = date;
        this.companyName = companyName;
        this.sector = sector;
        this.lastPrice = lastPrice;
        this.percentageChg = percentageChg;
        this.volume = volume;
        this.volumeChg = volumeChg;
    }


    public VolumeShockers(LocalDate date, String companyName, String sector, Double lastPrice, Double percentageChg, Long volume, Long volumeChg) {
        this.date = date;
        this.companyName = companyName;
        this.sector = sector;
        this.lastPrice = lastPrice;
        this.percentageChg = percentageChg;
        this.volume = volume;
        this.volumeChg = volumeChg;
    }

    public static VolumeShockers of(VolumeShockersEntity entity) {
        return new VolumeShockers(
                entity.getId(),
                entity.getDate(),
                entity.getCompanyName(),
                entity.getSector(),
                entity.getLastPrice(),
                entity.getPercentageChg(),
                entity.getVolume(),
                entity.getVolumeChg()
        );
    }


    public static VolumeShockersEntity of(VolumeShockers volumeShockers) {
        return new VolumeShockersEntity(
                volumeShockers.getDate(),
                volumeShockers.getCompanyName(),
                volumeShockers.getSector(),
                volumeShockers.getLastPrice(),
                volumeShockers.getPercentageChg(),
                volumeShockers.getVolume(),
                volumeShockers.getVolumeChg()
        );
    }


    public static VolumeShockers of(String[] split) {
        return new VolumeShockers(
                MarketUtil.convertDate(split[0]),
                split[1],
                split[2],
                Double.valueOf(split[3]),
                Double.valueOf(split[4]),
                Long.valueOf(split[5]),
                Long.valueOf(split[6])
        );
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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
