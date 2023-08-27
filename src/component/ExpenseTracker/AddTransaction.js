import React, { useContext } from 'react'
import { ExpenseContext } from './Context'

const AddTransaction = () => {
    const { state, dispatch } = useContext(ExpenseContext)

    const handleDescription = (e) => {
        const input = e.target.value
        console.log(input)
        dispatch({
            type: 'DESCRIPTION',
            payload: input
        })
    }

    const handleAmount = (e) => {
        const input = parseInt(e.target.value)
        console.log('amount' + input)
        dispatch({
            type: 'AMOUNT',
            payload: input
        })
    }

    const handleToggle = (e) => {
        console.log(state.transactionType)
        dispatch({
            type: 'TRANSACTION_TYPE',
            payload: e.target.value
        })
    }

    const handleTransactionList = () => {
        const transactionAmount = parseFloat(state.amount) * (state.transactionType === 'Income' ? 1 : -1);
        dispatch({
            type: 'TRANSACTIONLIST',
            transaction: {
                description: state.description,
                amount: transactionAmount
            },
        })
        dispatch({
            type: 'DESCRIPTION',
            payload: ''
        });
        dispatch({
            type: 'AMOUNT',
            payload: 0
        });
        dispatch({
            type: 'TRANSACTION_TYPE',
            payload: 'Expense'
        });
    }

    return (
        <div
            className='h-[28rem] w-[31rem] bg-[#7bdd7b] rounded-3xl mt-[18px]'>

            <span className='text-[24px] ml-[40px] text-[#e5ffdb] font-bold'>Add Transaction</span>
            <div className='flex'>
                <div className='flex flex-col h-[60px] w-[40%] ml-6 mt-8'>
                    <label
                        htmlFor='description'
                        className='ml-3'
                    >
                        Description
                    </label>
                    <input
                        type='text'
                        required='required'
                        value={state.description}
                        placeholder='description'
                        className='h-[35px] rounded-2xl p-3'
                        onChange={handleDescription}></input>
                </div>

                <div className='flex flex-col h-[60px] w-[40%] ml-6 mt-8'>
                    <label
                        htmlFor='amount'
                        className='ml-3'
                    >
                        Enter Amount
                    </label>
                    <input
                        type='Number'
                        required='required'
                        className='h-[35px] rounded-2xl p-3'
                        value={state.amount}
                        placeholder='Enter Amount'
                        onChange={handleAmount}
                    >
                    </input>
                </div>
            </div>

            <div className='flex gap-10 ml-[130px] mt-3'>
                <input
                    type='radio'
                    value='Expense'
                    checked={state.transactionType === 'Expense'}
                    name='radio'
                    onChange={handleToggle}
                />
                <label htmlFor='income' className='ml-[-25px]'>expense</label>

                <input
                    type='radio'
                    value='Income'
                    checked={state.transactionType === 'Income'}
                    name='radio'
                    onChange={handleToggle}
                />
                <label htmlFor='Income' className='ml-[-25px]'>Income</label>

            </div>

            <button type='button' onClick={handleTransactionList}
                className='bg-[#0a3f0a] text-[#e5ffdb] rounded-[40px] mt-3 ml-6 h-[40px] w-[80px] text-[15px] cursor-pointer'>
                ADD
            </button>

        </div>
    )
}

export default AddTransaction