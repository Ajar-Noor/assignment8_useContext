import React, { useContext } from 'react'
import { ExpenseContext } from './Context'
import { FaTrashAlt } from 'react-icons/fa'

const TransactionList = () => {
    const { state, dispatch } = useContext(ExpenseContext)

    const handleDeleteList = (index) => {
        // console.log("Deleting transaction at index:", index);
        // console.log("Current transaction list:", state.transactionList);
        dispatch({
            type: 'DELETE_LIST',
            payload: index
        })
    }

    return (
        <div className='h-[250px] w-[500px] rounded-3xl top-[400px] absolute bg-[#e5ffdb] overflow-y-auto'>
            <ul className='mt-8 ml-14'>
                {state.transactionList.map((transaction, index) => (
                    <li
                        key={index}
                        className='flex text-lg text-[#0a3f0a] bg-[#7bdd7b] mt-4 w-[80%] rounded-2xl p-3'>
                        <span>{transaction.description}</span>
                        <span className='ml-[30px]'>{transaction.amount}</span>
                        <FaTrashAlt
                            onClick={() => handleDeleteList(index)}
                            className='ml-[120px] mt-1 cursor-pointer'>
                        </FaTrashAlt>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TransactionList