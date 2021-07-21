import React, {FC, useContext, useEffect, useState} from 'react';
import { MarketContext } from '../../../hooks/MarketProvider';
import { SgxNifty } from '../../../typings/sgx/SgxNifty';
import { TodaySgxNifty } from './TodaySgxNifty';
import { Button, makeStyles, Modal } from '@material-ui/core';
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
        transformOrigin: "center"
    };
}

export const SgxNiftyDashboard:FC = () => {
    const {getSgxNiftys, sgxNiftyDetails, setTodaySgxNifty} = useContext(MarketContext);
    // const [sgxNiftys, setSgxNiftys] = useState([] as SgxNifty[])
    const {getSgxNifty, getTodaySgxNifty} = sgxNiftyDetails;
    const [currentSgx, setCurrentSgx] = useState("")
    const [dateSgx, setDateSgx] = useState("")
    const [preOpenNifty, setPreOpenNifty] = useState("")
    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
        setCurrentSgx("")
        setPreOpenNifty("")
    };

    useEffect(() => {
        getSgxNiftys();
    },[])

    const saveSgxNifty = () => setTodaySgxNifty(currentSgx, preOpenNifty)

    console.log("getSgxNifty getSgxNifty ::::::", getSgxNifty);
    const editSgxNifty = (sgx: SgxNifty) => {
        console.log(sgx);
        setOpen(true);
    }
    const deleteSgxNifty = (id: number) => {
        console.log(id);
    }

    const list = getSgxNifty && getSgxNifty.map((c, index) => <tr 
                    key={index} 
                    style={{background: index%2 === 0 ? '#e0e5e6' : '#f7f8fc'}}>
        <td>{c.id}</td>
        <td>{c.date}</td>
        <td>{c.niftyOpenToday}</td>
        <td>{c.preOpenNiftyMarket}</td>
        <td>{c.sgxOpenToday}</td>
        <td>
            <Button onClick={() => editSgxNifty(c)}
                    variant="contained"
                    color="primary" >Edit</Button>
            <Button onClick={() => deleteSgxNifty(c.id)}
                    variant="contained"
                    color="secondary" >Delete</Button>
        </td>
    </tr>)

    return <div>
        <h1>SGX Nifty vs NSE Nifty </h1>
        <TodaySgxNifty today={getTodaySgxNifty}/>
        <table width="90%"
                className="table"
                style={{border: '2px double'}}>
            <thead>
                <th>id</th>
                <th>Date</th>
                <th>Nifty Open Today</th>
                <th>Pre-Open Nifty Market</th>
                <th>Sgx Open Today</th>
                <th>Edit/Delete</th>
            </thead>
            {list}
        </table>
        <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={open}
            onClose={handleClose}>
        <div style={modalStyle} className={classes.paper}>
            <h2>Enter Todas Market</h2>
            <div>
                Date: <input type="date" 
                        onChange={(event)=>setDateSgx(event.currentTarget.value)}/>
            </div>
            <div>
                SGX Nifty: 
                <input 
                    type="text" 
                    value={currentSgx}
                    onChange={(event)=>setCurrentSgx(event.currentTarget.value)}/>
            </div>
            <div>
                NSE Pre-Open Nifty: 
                <input type="text"  
                    value={preOpenNifty}
                    onChange={(event)=>setPreOpenNifty(event.currentTarget.value)}/>
            </div>
            <div>
                <button type="button" 
                    onClick={saveSgxNifty}>Save</button>
            </div>
        </div>
    </Modal>
    </div>
}