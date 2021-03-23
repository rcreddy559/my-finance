import axios, { AxiosResponse } from 'axios';
import { Dispatch } from 'react';
import Dividend from '../typings/Dividend';
import { MarketAction } from '../typings/MarketAction';
import { BONUS, DIVIDEND, VOLUME_SHOCKERS } from '../utils/Constants';

const bonus_url = "https://www.moneycontrol.com/stocks/marketinfo/bonus/index.php?sel_year="
const dividends_url = "https://www.moneycontrol.com/stocks/marketinfo/dividends_declared/index.php?sel_year="
const volumeShockers = "https://www.moneycontrol.com/stocks/marketstats/nse_vshockers/index.php"

export async function fetchMoneycontrol(name: string, year: string) {
    let url: string = getUrl(name, year);
    console.log("URL :", url);

    const { data }: AxiosResponse<string>
        = await axios.get(url);
    return data;
}

function getUrl(name: string, year: string) {
    switch (name) {
        case BONUS:
            return bonus_url + year;
        case DIVIDEND:
            return dividends_url + year;
        case VOLUME_SHOCKERS:
            return volumeShockers;
        default:
            return dividends_url + year;
    }
}

export async function sendDividend(email: string, list: Dividend[], dispatch: Dispatch<MarketAction>) {
    let json = JSON.stringify(list)
    json = json.replaceAll('"name"', "name")
    json = json.replaceAll('"type"', "type")
    json = json.replaceAll('"announcement"', "announcement")
    json = json.replaceAll('"percentage"', "percentage")
    json = json.replaceAll('"record"', "record")
    json = json.replaceAll('"exDividend"', "exDividend")
    console.log(json);

    const graphql = {
        query: `
    mutation {
        emailDividend(email: ${email}, 
          dividends: ${json}) 
      }`,
        values: ""
    }

    let url: string = "http://localhost:8080/graphql"
    const { data }: AxiosResponse<string>
        = await axios.post(url, graphql);
    console.log("data", data);

    //dispatch({users: data.data.getUsers, type: SET_USERS})
}
