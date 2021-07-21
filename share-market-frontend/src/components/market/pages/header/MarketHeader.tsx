import React, { FC, useContext } from 'react';
import { MarketContext } from '../../../hooks/MarketProvider';
import * as Constants from '../../../utils/Constants';
import { Button, ButtonGroup } from '@material-ui/core';
import {COMPANY_DASHBOARD} from "../../../utils/Constants";

export const ExpatrioHeader: FC = () => {
    const { currentPage, 
            SetCurrentPage } = useContext(MarketContext);

    return <div className="header center">
        <ButtonGroup color="primary" aria-label="outlined primary button group">
                <Button onClick={() => SetCurrentPage(Constants.HOME_PAGE)}
                    color={primaryOrDefault(currentPage,Constants.HOME_PAGE)}
                    variant="contained"
                    >Home</Button>

                <Button onClick={() => SetCurrentPage(Constants.SGX_VS_NIFTY_50)}
                    color={primaryOrDefault(currentPage,Constants.SGX_VS_NIFTY_50)}
                    variant="contained"
                    >SGX VS Nifty 50</Button>

                <Button variant="contained" 
                    color={primaryOrDefault(currentPage,Constants.SET_DIVIDEND)}
                    onClick={() => SetCurrentPage(Constants.SET_DIVIDEND)}
                    >Dividend</Button> 

                <Button variant="contained" 
                    color={primaryOrDefault(currentPage,Constants.VOLUME_SHOCKERS)}
                    onClick={() => SetCurrentPage(Constants.VOLUME_SHOCKERS)}
                    >Volume Shockers</Button>
                <Button variant="contained"
                        color={primaryOrDefault(currentPage,Constants.COMPANY_DASHBOARD)}
                        onClick={() => SetCurrentPage(Constants.COMPANY_DASHBOARD)}
                >Companies</Button>
        </ButtonGroup>
        <div>Current Page: {currentPage}</div>
    </div>
}

const primaryOrDefault = (currentPage: string, value: string) => currentPage === value ? "primary":"default";
