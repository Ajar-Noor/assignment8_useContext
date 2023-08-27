import React from 'react'
import BudgetTracker from './component/ExpenseTracker/BudgetTracker'
import AddTransaction from './component/ExpenseTracker/AddTransaction'
import TransactionList from './component/ExpenseTracker/TransactionList'
import { ExpenseProvider } from './component/ExpenseTracker/Context'

const App = () => {
  return (
    <div
    className='h-[38rem] w-[31rem] my-[20px] mx-[500px] bg-[#0a3f0a] rounded-3xl font-[cursive]
    absolute '>
        <span className='text-center grid text-[#e5ffdb] font-semibold text-4xl mt-3'>Expense Tracker</span>
      <ExpenseProvider>
        <BudgetTracker />
        <AddTransaction />
        <TransactionList />
      </ExpenseProvider>
      </div>
  )
}

export default App