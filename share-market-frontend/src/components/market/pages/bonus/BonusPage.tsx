import React, {FC, useEffect, useState} from 'react';
import {fetchMoneycontrol} from '../../../api/MarketApi';
import Bonus from '../../../typings/Bonus'
import { BONUS } from '../../../utils/Constants';

export const BonusPage: FC = () => {

    const [bonuCompanies, setBonusCompanies] = useState([] as Bonus[])
    
  useEffect(() => {
     fetchMoneycontrol(BONUS, "2020")
     .then(result =>{
        //  console.log(result);
         
        // console.log(result)
        var parser = new DOMParser();
        var doc = parser.parseFromString(result, 'text/html');
        const list = doc.getElementsByClassName("b_12 dvdtbl")[0];
        const trList = list.childNodes[1].childNodes;
        console.log(trList.keys);
        console.log(trList.values);
        
        let array: string[] = [];
         
        trList.forEach(element =>{
            element.childNodes.forEach((e, index)=>{
                const value = e.textContent?.trim()
                if(value) {
                    array.push(value)
                }
            })
        })
        
        const bonusList: Bonus[] = [];

        for(let i=6;i<array.length;i++) {
            console.log(array[i], array[i+1], array[i+2], array[i+3], array[i+4]);
            const b: Bonus = {
                name: array[i], 
                ratio:array[i+1], 
                announcement: array[i+2], 
                record:array[i+3], 
                exBonus:array[i+4]
            };
            bonusList.push(b)
            i = i+4;
        }
        // console.log(list.childNodes[1].childNodes);

        setBonusCompanies(bonusList)
     })
  }, []);

  const bonusMap = bonuCompanies.map((c, index)=><tr key={c.name+index}>
      <td>{index+1}</td>
      <td>{c.name}</td>
      <td>{c.ratio}</td>
      <td>{c.announcement}</td>
      <td>{c.record}</td>
      <td>{c.exBonus}</td>
      </tr>)
    return <div>
        <h1>Share Market</h1>
        <table className="table">
            <tr>
                <td>SL No.</td>
                <td>Name</td>
                <td>ratio</td>
                <td>announcement</td>
                <td>record</td>
                <td>exBonus</td>
            </tr> 
            {bonusMap}   
        </table>
    </div>
}

