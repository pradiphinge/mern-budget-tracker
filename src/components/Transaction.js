import React from 'react'

export const Transaction = ({ transaction }) => {
    const sign = transaction.amount > 0 ? '+' : '-';
    return (
        <div>
            <li className={transaction.amount > 0?'plus':'minus'}>{transaction.text} <span>{sign}{Math.abs(transaction.amount)} ₹</span> <button className='delete-btn'>x</button></li>    
        </div>
    )
}
