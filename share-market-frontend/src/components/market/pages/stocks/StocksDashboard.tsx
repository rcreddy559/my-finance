import {FC, useEffect, useState} from "react";
import {getCompany} from '../../../api/ShareMarket'
import Company from "../../../typings/Company";

export const StocksDashboard:FC = () => {

    const [companies, setCompanies] = useState([] as Company[]);
    const [popupDisplay, setPopupDisplay] = useState("none")

    useEffect(()=>{
        getCompany()
            .then(data=>{
                setCompanies(data)
            });
    }, []);

    return <div>
        <h2>Stocks details</h2>
    </div>
}