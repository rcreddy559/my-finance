import Dividend from "./Dividend";

export default interface UpdateMarket {
    GetUsers(): void;
    GetUser(id: string): void;
    SetCurrentPage(page: string):void;
    SetCompanyPage(page: string):void;
    SendMail(email: string, list: Dividend[]):void;
    SetDividend(dividend: Dividend[]):void;
    getSgxNiftys():void;
    setTodaySgxNifty(currentSgx:string, preOpenNifty:string):void;
}