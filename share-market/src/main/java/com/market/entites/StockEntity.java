package com.market.entites;

import javax.persistence.*;

@Entity
@Table(name = "stock")
public class StockEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "COMPANY_ID", nullable = false)
    private CompanyEntity company;
    private long quantity;
    private double avgPrice;
    private double ltp;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public CompanyEntity getCompany() {
        return company;
    }

    public void setCompany(CompanyEntity company) {
        this.company = company;
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
}
