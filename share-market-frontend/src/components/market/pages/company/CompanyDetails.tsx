import React, {FC, useContext, useEffect, useState} from "react";
import {getCompany, deleteCompany} from '../../../api/ShareMarket'
import Company from "../../../typings/Company";
import {MarketContext} from "../../../hooks/MarketProvider";
import { NEW_COMPANY_PAGE } from '../../../utils/Constants'

export const CompanyDetails:FC = () => {
    const [companies, setCompanies] = useState([] as Company[]);

    useEffect(()=>{
        fetchCompany();
    }, []);

    const fetchCompany = () => {
        getCompany()
            .then(data=>{
                setCompanies(data)
            });
    }

    const deleteComp = (id: number) => {
        deleteCompany(id).then(r => {
            console.log('delete: ', r)
            fetchCompany();
        }).catch(error => {
            console.log('delete: ', error)
        });
    }

    const editCompany = (id: number)=> {
        console.log('Edit: ', id)
    }

    return <>
        <table width="100%"
               className="table"
               style={{border: '2px double'}}>
            <thead>
                <th>Sno.</th>
                <th>ID</th>
                <th>Code</th>
                <th>Name</th>
                <th className="center">Action</th>
            </thead>
        {companies.map((company, index)=><tr key={index}
                                             style={{background: index%2 === 0 ? '#e0e5e6' : '#f7f8fc'}}>
            <td>{index + 1}</td>
            <td>{company.id}</td>
            <td>{company.code}</td>
            <td>{company.name}</td>
            <td className="center">
                <button onClick={()=>editCompany(company.id)}>Edit</button>
                <button onClick={()=> deleteComp(company.id)}>Delete</button>
            </td>
        </tr>)}
        </table>
    </>
}