import React, {FC, useEffect, useState} from 'react';
import { fetchMoneycontrol } from '../../../api/MarketApi';
import { saveVolumeShockers } from '../../../api/MarketService';
import VolumeShocker from '../../../typings/VolumeShocker';
import * as Constants from '../../../utils/Constants';

export const VolumeShockers: FC = () => {
    const [shockers, setShockers] = useState([] as VolumeShocker[])

    useEffect(() => {
        if(shockers)
            fetchVolumeShockers();

    },[])

    const fetchVolumeShockers = () => {
        fetchMoneycontrol(Constants.VOLUME_SHOCKERS, "2021")
        .then(result => {
            //  console.log(result);

            // console.log(result)
            let parser = new DOMParser();
            let doc = parser.parseFromString(result, 'text/html');
            const list = doc.getElementsByClassName("bsr_table bsr_table930 MT20 PR hist_tbl")[0];
            const trList = list.childNodes[1].childNodes[3].childNodes;
            let array: string[] = [];
            let vsArray: VolumeShocker[] = [];
            trList.forEach(element => {
                if(element.hasChildNodes()) {
                    const name:any = element.childNodes[1].firstChild?.firstChild?.textContent;
                    const sector = element.childNodes[5].textContent?.trim().trimEnd().trimStart();
                    const lastPrice = element.childNodes[7].textContent
                    const percentageChange = element.childNodes[9].textContent
                    const avgVolume = element.childNodes[11].textContent
                    const percentageChangeVolume = element.childNodes[13].textContent
                    const volumeShockers = new Date().toLocaleDateString("en-IN").split("/").join("-")+"|"+
                                    name+"|"+
                                    sector+"|"+
                                    lastPrice?.replace(",","")+"|"+
                                    percentageChange?.replace(",","")+"|"+
                                    avgVolume+"|"+ 
                                    percentageChangeVolume;
                                console.log(volumeShockers);
                                    
                    array.push(volumeShockers)
                    vsArray.push({
                        companyName: name|| "",
                        sector: sector|| "",
                        lastPrice: lastPrice || "",
                        percentageChg: percentageChange|| "",
                        volume : avgVolume|| "",
                        volumeChg: percentageChangeVolume || ""
                    })
                }
            })
            setShockers(vsArray);
            //saveVolumeShockers(array)
        })
    }

    const list = shockers.map((c, index) => <tr 
                    key={index} 
                    style={{background: index%2 === 0 ? '#e0e5e6' : '#f7f8fc'}}>
        <td>{c.date}</td>
        <td>{c.companyName}</td>
        <td>{c.sector}</td>
        <td>{c.lastPrice}</td>
        <td>{c.percentageChg}</td>
        <td>{c.volume}</td>
        <td>{c.volumeChg}</td>
    </tr>)
    return <div>
        <h1>Volume Shockers</h1>
        <table width="100%"
                className="table"
                style={{border: '2px double'}}>
            <thead>
                <th>Date</th>
                <th>Name</th>
                <th>sector</th>
                <th>Last Price</th>
                <th>% Change</th>
                <th>Volume</th>
                <th>% Volume</th>
            </thead>
            {list}
        </table>
    </div>
}