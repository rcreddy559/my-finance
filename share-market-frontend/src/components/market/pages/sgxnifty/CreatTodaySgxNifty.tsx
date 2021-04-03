import { Modal, makeStyles } from '@material-ui/core';
import React, {FC, useContext, useState} from 'react';
import { MarketContext } from '../../../hooks/MarketProvider';
import { SgxNifty } from '../../../typings/sgx/SgxNifty';

const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top =  10;//rand();
    const left =  10;//rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(${top}%, ${left}%)`,
    };
}

export const CreateTodaySgxNifty:FC<{today:SgxNifty}> = ({today}): JSX.Element => {
    
    const {setTodaySgxNifty, sgxNiftyDetails} = useContext(MarketContext);
    const [currentSgx, setCurrentSgx] = useState("")
    const [preOpenNifty, setPreOpenNifty] = useState("")
    console.log("Today SGX Nifty Details ::::::", sgxNiftyDetails);

    const enterCurrentSgx = (value: string) => value && setCurrentSgx(value)
    const enterPreOpenNifty = (value: string) => value && setPreOpenNifty(value)
    const saveSgxNifty = () => setTodaySgxNifty(currentSgx, preOpenNifty)
    
    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    return <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={open}
            onClose={handleClose}>
        <div style={modalStyle} className={classes.paper}>
            <h2>Enter Todas Market</h2>
            <div>
                SGX Nifty: 
                <input 
                    type="text" 
                    value={currentSgx}
                    onChange={(event)=>enterCurrentSgx(event.currentTarget.value)}/>
            </div>
            <div>
                NSE Pre-Open Nifty: 
                <input type="text"  
                    value={preOpenNifty}
                    onChange={(event)=>enterPreOpenNifty(event.currentTarget.value)}/>
            </div>
            <div>
                <button type="button" 
                    onClick={saveSgxNifty}>Save</button>
            </div>
        </div>
        </Modal>
}
