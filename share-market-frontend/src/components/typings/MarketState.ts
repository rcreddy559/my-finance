import Dividend from "./Dividend";
import { SgxNiftyDetails } from "./sgx/sgxNiftyDetails";
import User from "./User";
import Company from "./Company";

export interface MarketState {
    users: User[];
    user: User;
    isLoading: boolean;
    message: string;
    currentPage: string;
    companyCurrentPage: string;
    dividend: Dividend[]
    sgxNiftyDetails: SgxNiftyDetails,
    companies: Company[],
    company: Company
}