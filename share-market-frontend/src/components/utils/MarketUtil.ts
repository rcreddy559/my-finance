import GraphQLQuery from "../typings/GraphQLQuery"
import {MarketState} from "../typings/MarketState"
import User from "../typings/User"
import { DIVIDEND, HOME_PAGE, SET_USERS } from "./Constants"

export function getInitialState(): MarketState  {

    return {
        user: {} as User,
        users: [] as User[],
        message: "",
        isLoading: false,
        currentPage: DIVIDEND,
        dividend: []
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