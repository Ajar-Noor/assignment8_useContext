import React, { useContext } from 'react'
import { ExpenseContext } from './Context'

const BudgetTracker = () => {
    const {state}=useContext(ExpenseContext);

    const totalAmount=state.transactionList.map((item)=>item.amount)
    const income = totalAmount.filter(item => item > 0).reduce((acc, item) => (acc+=item), 0);
    const expense = (totalAmount.filter(item => item < 0).reduce((acc, item) => (acc+=item), 0) * -1);
    const Balance=income-expense;

    return (
        <>
            <div className='text-[#688a5a] text-base ml-[80px] mt-[55px] flex gap-x-16'>
                <div className='flex flex-col'>
                    <span>Income</span>
                    <span>+${income}</span>
                </div>
                <div className='flex flex-col'>
                    <span>Expenses</span>
                    <span>-{expense}</span>
                </div>
                <div className='flex flex-col'>
                    <span>Balance</span>
                    <span>{Balance}</span>
                </div>
            </div>
        </>
    )
}

export default BudgetTracker