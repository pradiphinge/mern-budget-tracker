import React, { useContext,useEffect } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { Transaction } from './Transaction';


export const TransactionList = () => {
    const context = useContext(GlobalContext);
    // console.log(context);
    const { transactions,getTransactions }=context;
    
    useEffect(() => {
        getTransactions()
    }, []);

    return (
        <>
            <div className="div_line_bottom">
                <h4>History</h4>
            </div>
            <ul className='list'>
                {transactions.map(transaction => {
                    return <Transaction key={transaction.id} transaction={transaction}/>
                })}
                
            </ul>

        </>
    )
}
