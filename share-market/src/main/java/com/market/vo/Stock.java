package com.market.vo;

public class Stock {
    private long id;
    private String companyName;
    private long companyId;
    private long quantity;
    private double avgPrice;
    private double ltp;
    private double currentValue;
    private double pl;
    private double plPercentage;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getCompanyId() {
        return companyId;
    }

    public void setCompanyId(long companyId) {
        this.companyId = companyId;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public long getQuantity() {
        return quantity;
    }

    public void setQuantity(long quantity) {
        this.quantity = quantity;
    }

    public double getAvgPrice() {
        return avgPrice;
    }

    public void setAvgPrice(double avgPrice) {
        this.avgPrice = avgPrice;
    }

    public double getLtp() {
        return ltp;
    }

    public void setLtp(double ltp) {
        this.ltp = ltp;
    }

    public double getCurrentValue() {
        return currentValue;
    }

    public void setCurrentValue(double currentValue) {
        this.currentValue = currentValue;
    }

    public double getPl() {
        return pl;
    }

    public void setPl(double pl) {
        this.pl = pl;
    }

    public double getPlPercentage() {
        return plPercentage;
    }

    public void setPlPercentage(double plPercentage) {
        this.plPercentage = plPercentage;
    }
}
