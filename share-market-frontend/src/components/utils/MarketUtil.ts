import GraphQLQuery from "../typings/GraphQLQuery"
import {MarketState} from "../typings/MarketState"
import { SgxNiftyDetails } from "../typings/sgx/sgxNiftyDetails"
import User from "../typings/User"
import { COMPANY_DASHBOARD } from "./Constants"
import Company from "../typings/Company";

export function getInitialState(): MarketState  {

    return {
        user: {} as User,
        users: [] as User[],
        message: "",
        isLoading: false,
        currentPage: COMPANY_DASHBOARD,
        companyCurrentPage: "",
        dividend: [],
        sgxNiftyDetails: {} as SgxNiftyDetails,
        companies: [],
        company: {} as Company
     }
}


export const usersQuery: GraphQLQuery = {
        query: `
                query {
                    getUsers {
                        id
                        name
                        email
                    }
                }`,
        values: ``
}


export const userQuery: GraphQLQuery = {
    query: `
        query {
            getUsers {
                id
                name
                email
            }
        }`,
    values: ""
}

export const isActiveClass = (currentePage: string, page: string) => currentePage === page 
? 'primary' : 'text';