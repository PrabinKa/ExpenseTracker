import React, { createContext, useState, useContext } from "react";

export const ExpenseContext  = createContext({})

export  const ExpenseContextProvider = ({children}) => {
    const [expenseTitle, setExpenseTitle] = useState(null)
    const [expenseData, setExpenseData] = useState(null)

    const getExpenseTitle = (title) => {
        setExpenseTitle(title)
    }

    const fetchExpense = (data) => {
        setExpenseData(data)
    }
    return(
        <ExpenseContext.Provider value={{expenseTitle, getExpenseTitle, fetchExpense, expenseData }} >
            {children}
        </ExpenseContext.Provider>
    )
}

export const useExpense = () => useContext(ExpenseContext);