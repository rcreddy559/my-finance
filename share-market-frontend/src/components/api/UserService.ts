import axios, { AxiosResponse } from 'axios';
import { Dispatch } from 'react';
import GraphQLQuery from '../typings/GraphQLQuery';
import { MarketAction } from '../typings/MarketAction';
import User from '../typings/User';
import { SET_USERS } from '../utils/Constants';


export async function  fetchUsers(graphql: GraphQLQuery, dispatch: Dispatch<MarketAction>) {
    let url: string = "http://localhost:8080/graphql"
    console.log("URL :", url);
                        
    const { data }: AxiosResponse<UsersResponse> 
    = await axios.post(url, graphql);
    dispatch({users: data.data.getUsers, type: SET_USERS})
    return data.data;
}

interface UsersResponse {
        data: {
            getUsers: User[]
        }
}