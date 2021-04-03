import * as Constants from "../utils/Constants"
import Dividend from "./Dividend";
import { SgxNifty } from "./sgx/SgxNifty";
import { SgxNiftyDetails } from "./sgx/sgxNiftyDetails";
import User from "./User";
interface SetUser {
    type: typeof Constants.SET_USER,
    user: User
}

interface SetUsers {
    type: typeof Constants.SET_USERS,
    users: User[]
}

interface SetCurrentPage {
    type: typeof Constants.SET_CURRENT_PAGE,
    page: string
}

interface SetDividend {
    type: typeof Constants.SET_DIVIDEND,
    dividend: Dividend[]
}

interface SetSgxNiftys {
    type: typeof Constants.SGX_VS_NIFTY_50,
    sgxNiftyDetails: SgxNiftyDetails
}

interface SetTodaySgxNifty {
    type: typeof Constants.SGX_NIFTY,
    getTodaySgxNifty: SgxNifty
}

export type MarketAction = SetUser 
                            | SetUsers 
                            | SetCurrentPage 
                            | SetDividend 
                            | SetSgxNiftys
                            | SetTodaySgxNifty
