import React, {FC, useContext} from 'react';
import { MarketContext } from '../hooks/MarketProvider';
import * as Constants from '../utils/Constants';
import { BonusPage } from './pages/bonus/BonusPage';
import { DividendPage } from './pages/dividend/DividendPage';
import { SgxNiftyDashboar } from './pages/sgxnifty/SgxNiftyDashboar';
import { UserHome } from './pages/user/UserHome';
import { VolumeShockers } from './pages/volumeshockers/VolumeShockers';

export const Dashboard: FC = () => {
   const {currentPage} = useContext(MarketContext);

    return <div>
        {getCurrentPage(currentPage)}
    </div>
}

const getCurrentPage = (currentPage: string) => {
    switch (currentPage) {
        case Constants.VOLUME_SHOCKERS:
            return <VolumeShockers/>
        case Constants.DIVIDEND:
            return <DividendPage/>
        case Constants.BONUS: 
            return <BonusPage/>
        case Constants.SET_USERS: 
            return <UserHome/>
        case Constants.SGX_VS_NIFTY_50:
            return <SgxNiftyDashboar/>
        default:
            <BonusPage/>
    }
}

