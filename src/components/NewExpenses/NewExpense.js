import React from "react";
import ExpenseForm from "./ExpenseForm";
import './new-expense.css';
import NewExpenseCard from "../UI/NewExpenseCard";

function NewExpense(props){

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddingExpense(expenseData);
    }

    return(<NewExpenseCard className="new-expense">
        <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} />
    </NewExpenseCard>)
}

export default NewExpense;