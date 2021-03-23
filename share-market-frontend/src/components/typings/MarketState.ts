import Dividend from "./Dividend";
import User from "./User";

export interface MarketState {
    users: User[];
    user: User;
    isLoading: boolean;
    message: string;
    currentPage: string;
    dividend: Dividend[]
}