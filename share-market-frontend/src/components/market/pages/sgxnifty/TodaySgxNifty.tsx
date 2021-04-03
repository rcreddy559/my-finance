import React, {FC, useContext, useState} from 'react';
import { MarketContext } from '../../../hooks/MarketProvider';
import { SgxNifty } from '../../../typings/sgx/SgxNifty';
import { CreateTodaySgxNifty } from './CreatTodaySgxNifty';

export const TodaySgxNifty:FC<{today:SgxNifty}> = ({today}): JSX.Element => {
    const { sgxNiftyDetails} = useContext(MarketContext);
    const { getTodaySgxNifty} = sgxNiftyDetails;

    const data = getTodaySgxNifty ? <div>
        <div>Id: {getTodaySgxNifty.id}</div> 
        <div>Date: {getTodaySgxNifty.date}</div> 
        <div>Id: {getTodaySgxNifty.niftyOpenToday}</div> 
        <div>preOpenNiftyMarket: {getTodaySgxNifty.preOpenNiftyMarket}</div> 
        <div>Id: {getTodaySgxNifty.sgxOpenToday}</div> 
    </div> : <CreateTodaySgxNifty today={getTodaySgxNifty}/>

    return <div>
        <h1>Today SGX Nifty Details</h1>
         {data}        
    </div>
}