import React from "react"
import ExpenseItem from "./ExpenseItem"
import './expense-list.css'


function ExpenseList(props){
    if(props.items.length === 0 ){
        return <h2 className="error-message">Found no expenses</h2>
    }
    return (
        <ul className="expense-list">
            {props.items.map((expense) => (
            <ExpenseItem
            key = {expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}></ExpenseItem>
        ))}
        </ul>
    )
}


export default ExpenseList;