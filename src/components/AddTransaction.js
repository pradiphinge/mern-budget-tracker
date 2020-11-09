import React,{useState,useContext} from 'react'
import { GlobalContext } from '../context/GlobalContext'

export const AddTransaction = () => {
    const { addTransaction } = useContext(GlobalContext);
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const handleFocus = (event) => event.target.select();
    const onSubmit = (e) => {
        e.preventDefault();
        const newTransaction = {
            id : Math.floor(Math.random() * 10000000),
            text,
            amount:+amount
        }
        addTransaction(newTransaction);
        setText('');
        setAmount(0);
    }

    return (
        <>
            <div className="div_line_bottom">
                <h4>Add Transaction</h4>
            </div>   
            <form onSubmit={onSubmit} autoComplete='off'>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type='text' id ="text" value={text} onChange={(e) => setText(e.target.value)} onFocus={handleFocus} placeholder='Enter text ... ' ></input>
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount <br />
            (negative - expense, positive - income)</label>
                    <input type='number' id = "amount" value={amount} onChange={(e) => setAmount(e.target.value)} onFocus={handleFocus} placeholder='Enter amount ... ' ></input>
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </>
    )
}
