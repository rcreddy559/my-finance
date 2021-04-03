import axios, { AxiosResponse } from 'axios';
import { Dispatch } from 'react';
import { MarketAction } from '../typings/MarketAction';
import { SgxNifty } from '../typings/sgx/SgxNifty';
import { SgxNiftyDetails } from '../typings/sgx/sgxNiftyDetails';
import *  as Constants from '../utils/Constants';

export async function fetchSgxNiftys(dispatch: Dispatch<MarketAction>) {
    const graphql = {
        query: `
         query {
            getSgxNifty {
              id
              date
              sgxOpenToday
              preOpenNiftyMarket
              niftyOpenToday
            },
            getTodaySgxNifty(input:" today date is 1st Aprilt 2021"){
              id
              date
              sgxOpenToday
              preOpenNiftyMarket
              niftyOpenToday
            }
          }`,
        values: ""
    }

    let url: string = "http://localhost:8085/graphql"
    const { data }: AxiosResponse<SgxNiftyData>
        = await axios.post(url, graphql);
    return data.data;
}
export async function saveTodaySgxNifty(currentSgx:string, 
                              preOpenNifty:string) {
  const inputData = "currentSgx:"+currentSgx+
                    ",preOpenNifty:"+preOpenNifty;
  const graphql = {
      query: `
       mutation {
        saveTodaySgxNifty(`+inputData+`) {
            id
            date
            sgxOpenToday
            preOpenNiftyMarket
            niftyOpenToday
          }
        }`,
      values: ""
  }

  let url: string = "http://localhost:8085/graphql"
  const { data }: AxiosResponse<TodaySgxNiftyData>
      = await axios.post(url, graphql);
  return data;
}
interface SgxNiftyData { 
    data: SgxNiftyDetails
}

interface TodaySgxNiftyData { 
  data: {saveTodaySgxNifty: SgxNifty}
}