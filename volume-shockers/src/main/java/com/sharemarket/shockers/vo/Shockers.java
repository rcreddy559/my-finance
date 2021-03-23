package com.sharemarket.shockers.vo;

import java.time.LocalDate;

import com.sharemarket.shockers.utils.ShockersUtil;

public class Shockers {
  private Long id;
    private LocalDate date;
    private String companyName;
    private String sector;
    private Double lastPrice;
    private Double percentageChg;
    private Long volume;
    private Long volumeChg;

    public Shockers() { }

    public Shockers(Long id, LocalDate date, String companyName, String sector, Double lastPrice, Double percentageChg, Long volume, Long volumeChg) {
        this.id = id;
        this.date = date;
        this.companyName = companyName;
        this.sector = sector;
        this.lastPrice = lastPrice;
        this.percentageChg = percentageChg;
        this.volume = volume;
        this.volumeChg = volumeChg;
    }


    public Shockers(LocalDate date, String companyName, String sector, Double lastPrice, Double percentageChg, Long volume, Long volumeChg) {
        this.date = date;
        this.companyName = companyName;
        this.sector = sector;
        this.lastPrice = lastPrice;
        this.percentageChg = percentageChg;
        this.volume = volume;
        this.volumeChg = volumeChg;
    }

    public static Shockers of(ShockersEntity entity) {
        return new Shockers(
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


    public static ShockersEntity of(Shockers Shockers) {
        return new ShockersEntity(
                Shockers.getDate(),
                Shockers.getCompanyName(),
                Shockers.getSector(),
                Shockers.getLastPrice(),
                Shockers.getPercentageChg(),
                Shockers.getVolume(),
                Shockers.getVolumeChg()
        );
    }


    public static Shockers of(String[] split) {
        return new Shockers(
            ShockersUtil.convertDate(split[0]),
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

    @Override
    public String toString() {
        
        return super.toString();
    }  
}
