import React, { createContext, FC } from "react";
import { MarketScheme } from "../typings/MarketScheme";
import {useMarket} from './useMarket'

export const MarketContext = createContext({} as MarketScheme);

export const MarketProvider:FC = ({children}) => {
    const state = useMarket();
    
    return (<MarketContext.Provider value={state}>
        {children}
    </MarketContext.Provider>)
}


