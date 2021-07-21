import React, {FC, useContext} from 'react';
import {CompanyDetails} from "./CompanyDetails";
import {AddCompany} from "./AddCompany";
import {NEW_COMPANY_PAGE, COMPANY_DETAILS} from '../../../utils/Constants'
import {MarketContext} from "../../../hooks/MarketProvider";

export const CompanyDashboard: FC = () => {
    const {companyCurrentPage, SetCompanyPage} = useContext(MarketContext);

    const createNewCompany = () => {
        SetCompanyPage(NEW_COMPANY_PAGE)
    }

    return <>
        <div className="w3-container w3-brown">
            <h2>Companies</h2>
            {companyCurrentPage == NEW_COMPANY_PAGE ?
                <button className="w3-btn w3-blue-grey" onClick={()=>SetCompanyPage(COMPANY_DETAILS)}>All Companies</button>:
                <button className="w3-btn w3-blue-grey" onClick={()=>SetCompanyPage(NEW_COMPANY_PAGE)}>Create New Company</button>
            }
        </div>
        {getCompanyPage(companyCurrentPage)}
    </>
}

const getCompanyPage = (currentPage: string) => {
    switch (currentPage) {
        case NEW_COMPANY_PAGE:
            return <AddCompany/>
        default:
            return <CompanyDetails/>
    }
}

