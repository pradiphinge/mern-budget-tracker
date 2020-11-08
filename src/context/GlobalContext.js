import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

//initial State
const initialState={
    transactions: [
        { id:1 , text:'Salary', amount:300},
        { id:2, text: 'Flower', amount: -20 },
        { id:3, text: 'Book', amount: -30 },
        { id:4 , text:'Camera', amount:150},
    ]
}

//create context
export const GlobalContext = createContext(initialState);

//Provider Component
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    return (<GlobalContext.Provider value ={{transactions:state.transactions,deleteTransaction}}>
        {children}
    </GlobalContext.Provider>)
}