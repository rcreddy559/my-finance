import React, { ChangeEvent, FC, useContext, useEffect, useState } from 'react';
import { fetchMoneycontrol } from '../../../api/MarketApi';
import { MarketContext } from '../../../hooks/MarketProvider';
import Dividend from '../../../typings/Dividend';
import { DIVIDEND } from '../../../utils/Constants';

export const DividendPage: FC = () => {
    const { dividend, users, SendMail, SetDividend } = useContext(MarketContext);
    const [selectedEmail, SetSelectedEmail] = useState("")
    const [dividendCompaniesSort, setDividendCompaniesSort] = useState([] as Dividend[])

    useEffect(() => {
        if (dividend) {
            //fetchDividend();
        }
    }, []);

    const fetchDividend = () => {
        fetchMoneycontrol(DIVIDEND, "2021")
            .then(result => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(result, 'text/html');
                const list = doc.getElementsByClassName("b_12 dvdtbl")[0];
                const trList = list.childNodes[1].childNodes;
                let array: string[] = [];

                trList.forEach(element => {
                    element.childNodes.forEach((e, index) => {
                        const value = e.textContent?.trim()
                        if (value) {
                            array.push(value)
                        }
                    })
                })

                // console.log(array); 
                const dividendList: Dividend[] = [];

                for (let i = 8; i < array.length; i++) {
                    // console.log(array[i], array[i+1], array[i+2], array[i+3], array[i+4]);
                    const b: Dividend = {
                        name: array[i],
                        type: array[i + 1],
                        percentage: array[i + 2],
                        announcement: array[i + 3],
                        record: array[i + 4],
                        exDividend: array[i + 5]
                    };
                    dividendList.push(b)
                    i = i + 5;
                }
                SetDividend(dividendList)
            })
    }

    const dividendMap = dividendCompaniesSort.map((c, index) => <tr key={c.name + index}>
        <td>{index + 1}</td>
        <td>{c.name}</td>
        <td>{c.type}</td>
        <td>{c.percentage}</td>
        <td>{parseFloat(c.percentage) / 100}</td>
        <td>{c.announcement}</td>
        <td>{c.record}</td>
        <td>{c.exDividend}</td>
    </tr>)

    const calculateTop5Dividend = () => {
        setDividendCompaniesSort(dividend.sort((d1, d2) => {
            if (parseInt(d1.percentage) > parseInt(d2.percentage)) {
                return -1;
            } else if (parseInt(d1.percentage) < parseInt(d2.percentage)) {
                return 0;
            } else {
                return 1;
            }
        })
        )
    }

    const dropDown = users.map((c, index) => <option key={index} value={c.email}>
        {c.name}
    </option>)

    const selectedUserEvent = (event: ChangeEvent<HTMLSelectElement>) => SetSelectedEmail(event.currentTarget.value)
    const sendMail = () => SendMail(selectedEmail, dividend)

    return <div>
        <h1>Share Market - Dividend: {selectedEmail}</h1>
        <div>
            <button onClick={calculateTop5Dividend}>Top 5 of Dividend</button>
            <select onChange={(e) => selectedUserEvent(e)}>
                {dropDown}
            </select>
            <button onClick={sendMail}>Send Mail</button>
        </div>
        <table className="table">
            <tr>
                <td>SL No.</td>
                <td>Name</td>
                <td>type</td>
                <td>percentage</td>
                <td>Amount</td>
                <td>announcement</td>
                <td>record</td>
                <td>exDividend</td>
            </tr>
            {dividendMap}
        </table>
    </div>
}

