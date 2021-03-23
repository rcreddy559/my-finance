package com.market.utils;

import java.time.LocalDate;

public class MarketUtil {
    private MarketUtil(){}

    public static LocalDate convertDate(String date) {
        var dateFormat = date.split("-");
        return LocalDate.of(Integer.parseInt(dateFormat[2]),
                Integer.parseInt(dateFormat[1]),
                Integer.parseInt(dateFormat[0]));

//        var ld = LocalDate
//                .parse(dateFormat[2]+"-"+dateFormat[1]+"-"+dateFormat[0], DATEFORMATTER);
//        var ldt = LocalDateTime.of(ld, LocalDateTime.now().toLocalTime());
//        return ldt.toLocalDate();
    }
}
