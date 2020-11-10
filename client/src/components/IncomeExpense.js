import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'

export const IncomeExpense = () => {
    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map(trasaction => trasaction.amount);
    
    const income = amounts
        .filter(amount => amount > 0)
        .reduce((total, amount) => total + amount, 0);
    
    const expense = amounts
        .filter(amount => amount < 0)
        .reduce((total, amount) => total + amount, 0);

    return (
        <div className="income-expense-container">
            <div className="income">
                <h4>Income</h4>
                <p className='money plus'>₹ {income}</p>
            </div>   
            <div className="expense">
                <h4>Expense</h4>
                <p className='money minus'>₹ {Math.abs(expense)}</p>
            </div>
        </div>
    )
}
