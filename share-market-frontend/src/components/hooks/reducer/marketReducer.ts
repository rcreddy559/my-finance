import {
    SET_CURRENT_PAGE,SET_DIVIDEND,SET_USER, SET_USERS
} from "../../utils/Constants";
import {MarketState} from "../../typings/MarketState";
import { MarketAction } from "../../typings/MarketAction";

export function marketReducer(state: MarketState, action: MarketAction): MarketState {
    state = {
        ...state,
        message: ""
    }
    switch (action.type) {
        case SET_USER: {
            return {...state, 
                    user: action.user
                }
        }
        case SET_USERS: {
            return {...state, 
                    users: action.users
                }
        }
        case SET_CURRENT_PAGE: {
            return {...state, 
                currentPage: action.page
            }
        }
        case SET_DIVIDEND: {
            return {...state, 
                dividend: action.dividend
            }
        }

        default:
            return state;
    }
}