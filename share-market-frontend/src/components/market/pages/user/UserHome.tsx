import React, {FC, useContext, useEffect, useState} from 'react';
import { MarketContext } from '../../../hooks/MarketProvider';


export const UserHome: FC = () => {
    const {users, GetUsers} = useContext(MarketContext);
    console.log("UserHome: ", users);
    
    useEffect(()=> {
        GetUsers() 
    
    }, [])
 
    const usersData = users.map(user => <tr>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.email}</td>
    </tr>);
    return <div>
        <h1>User Home</h1>
        <table>
            <thead>
                <td>Id</td>
                <td>Name</td>
                <td>Email</td>
                </thead>
                {usersData}
        </table>
         
    </div>
}

