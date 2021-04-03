import Dividend from "./Dividend";
import { SgxNiftyDetails } from "./sgx/sgxNiftyDetails";
import User from "./User";

export interface MarketState {
    users: User[];
    user: User;
    isLoading: boolean;
    message: string;
    currentPage: string;
    dividend: Dividend[]
    sgxNiftyDetails: SgxNiftyDetails
}