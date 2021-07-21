import * as Constants from "../../utils/Constants";
import {MarketState} from "../../typings/MarketState";
import { MarketAction } from "../../typings/MarketAction";

export function marketReducer(state: MarketState, action: MarketAction): MarketState {
    state = {
        ...state,
        message: ""
    }
    switch (action.type) {
        case Constants.SET_USER: {
            return {...state, 
                    user: action.user
                }
        }
        case Constants.SET_USERS: {
            return {...state, 
                    users: action.users
                }
        }
        case Constants.SET_CURRENT_PAGE: {
            return {...state, 
                currentPage: action.page
            }
        }
        case Constants.SET_COMPANY_PAGE: {
            return {...state,
                companyCurrentPage: action.page
            }
        }
        case Constants.SET_DIVIDEND: {
            return {...state, 
                dividend: action.dividend
            }
        }
        case Constants.SGX_VS_NIFTY_50: {
            return {...state, 
                sgxNiftyDetails: action.sgxNiftyDetails}
        }
        case Constants.SGX_NIFTY: {
            const sgxNiftyDetails = {
                ...state.sgxNiftyDetails,
                getTodaySgxNifty: action.getTodaySgxNifty
            };
            return {...state, sgxNiftyDetails}
        }
        default:
            return state;
    }
}