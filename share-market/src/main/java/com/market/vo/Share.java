package com.market.vo;

public class Share {
    private Long id;
    private String name;
    private String code;
    private String avgPrice;
    private String noShares;
    private String url;

    public Share() {}

    public Share(String name, String code, String avgPrice, String noShares, String url) {
        this.name = name;
        this.code = code;
        this.avgPrice = avgPrice;
        this.noShares = noShares;
        this.url = url;
    }

    public Share(Long id, String name, String code, String avgPrice, String noShares, String url) {
        this.id = id;
        this.name = name;
        this.code = code;
        this.avgPrice = avgPrice;
        this.noShares = noShares;
        this.url = url;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getAvgPrice() {
        return avgPrice;
    }

    public void setAvgPrice(String avgPrice) {
        this.avgPrice = avgPrice;
    }

    public String getNoShares() {
        return noShares;
    }

    public void setNoShares(String noShares) {
        this.noShares = noShares;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }
}
