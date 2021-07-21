import { useReducer } from "react"
import { sendDividend } from "../api/MarketApi";
import { fetchSgxNiftys, saveTodaySgxNifty } from "../api/SgxNiftyService";
import { fetchUsers } from "../api/UserService";
import Dividend from "../typings/Dividend";
import { MarketScheme } from "../typings/MarketScheme";
import * as Constants from "../utils/Constants";
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
           dispatch({type: Constants.SET_CURRENT_PAGE, page});
        },
        SetCompanyPage(page: string) {
            dispatch({type: Constants.SET_COMPANY_PAGE, page});
        },
        SendMail(email: string, list:Dividend[]) {
            sendDividend(email, list, dispatch)
        },
        SetDividend(dividend: Dividend[]) {
            dispatch({type: Constants.SET_DIVIDEND, dividend});
        },
        getSgxNiftys() {
            fetchSgxNiftys(dispatch).then(result =>{
                console.log("result: ",result);
                
                dispatch({
                    sgxNiftyDetails: result, 
                    type: Constants.SGX_VS_NIFTY_50
                })
            });
        },
        setTodaySgxNifty(currentSgx:string, preOpenNifty:string) {
            saveTodaySgxNifty(currentSgx, preOpenNifty).then(result =>{
                console.log(result.data.saveTodaySgxNifty);
                
                dispatch({
                    type: Constants.SGX_NIFTY, 
                    getTodaySgxNifty: result.data.saveTodaySgxNifty
                })
                
            })
        }
    }
}