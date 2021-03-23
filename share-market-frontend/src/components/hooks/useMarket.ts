import { useReducer } from "react"
import { sendDividend } from "../api/MarketApi";
import { fetchUsers } from "../api/UserService";
import Dividend from "../typings/Dividend";
import { MarketScheme } from "../typings/MarketScheme";
import { SET_CURRENT_PAGE, SET_DIVIDEND } from "../utils/Constants";
import { getInitialState, usersQuery } from "../utils/MarketUtil";
import {marketReducer} from "./reducer/marketReducer";

const initialState = getInitialState();
export function useMarket(): MarketScheme {
    const [state, dispatch] = useReducer(marketReducer, initialState);

    return { 
        ...state,
        GetUsers() {
            fetchUsers(usersQuery,dispatch);
        },
        GetUser() {

        },
        SetCurrentPage(page:string) {
           dispatch({type: SET_CURRENT_PAGE, page});
        },
        SendMail(email: string, list:Dividend[]) {
            sendDividend(email, list, dispatch)
        },
        SetDividend(dividend: Dividend[]) {
            dispatch({type: SET_DIVIDEND, dividend});
        }
    }
}