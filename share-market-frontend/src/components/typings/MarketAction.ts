import {SET_CURRENT_PAGE, SET_DIVIDEND, SET_USER, SET_USERS} from "../utils/Constants"
import Dividend from "./Dividend";
import User from "./User";
interface SetUser {
    type: typeof SET_USER,
    user: User
}

interface SetUsers {
    type: typeof SET_USERS,
    users: User[]
}

interface SetCurrentPage {
    type: typeof SET_CURRENT_PAGE,
    page: string
}

interface SetDividend {
    type: typeof SET_DIVIDEND,
    dividend: Dividend[]
}
export type MarketAction = SetUser 
                            | SetUsers 
                            | SetCurrentPage 
                            | SetDividend 