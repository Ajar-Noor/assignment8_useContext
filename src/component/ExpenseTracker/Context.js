import React, { createContext, useReducer } from 'react'

const initialValue = { description: '', amount: 0, transactionType: 'Expense', transactionList: [] }

const reducer = (state, action) => {
    switch (action.type) {
        case 'DESCRIPTION':
            return {
                ...state,
                description: action.payload
            }
        case 'AMOUNT':
            return {
                ...state,
                amount: action.payload
            }
        case 'TRANSACTION_TYPE':
            return {
                ...state,
                transactionType: action.payload
            }
        case 'TRANSACTIONLIST':
            console.log(state.transactionList)
            return {
                ...state,
                transactionList: [...state.transactionList, action.transaction],
            }
        case 'DELETE_LIST':
            const updatedList = state.transactionList.filter((_, i) => i !== action.payload);
            return {
                ...state,
                transactionList: updatedList,
            }
      
        default:
            return state
    }

}

export const ExpenseContext = createContext()

export const ExpenseProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialValue)
    return (
        <ExpenseContext.Provider value={{ state, dispatch }}>
            {children}
        </ExpenseContext.Provider>
    )
}

