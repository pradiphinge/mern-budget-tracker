import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalContext'

export const Balance = () => {
    const { transactions } = useContext(GlobalContext)
    const amounts = transactions.map(transaction => transaction.amount);
    const showBalance = amounts.reduce((total, amount) => total + amount, 0).toFixed(2);
    //console.log(showBalance);
    //console.log(amounts);
    return (
        <>
            <h4>Your Balance</h4>  
            <h1>₹ {showBalance} </h1> 
        </>
    )
}
