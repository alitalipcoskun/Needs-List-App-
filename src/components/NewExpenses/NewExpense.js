import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import './new-expense.css';
import NewExpenseCard from "../UI/NewExpenseCard";

function NewExpense(props){
    const [addingExpense, setAddingExpense] = useState(false);
    function addingExpenseHandler(){
        setAddingExpense(true);
    }
    let newExpense = (
        <div className="new-expense__actions">
            <button onClick={addingExpenseHandler}>Add New Expense</button>
        </div>
    )
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddingExpense(expenseData);
        setAddingExpense(false);
    }
    function cancelExpenseHandler(){
        setAddingExpense(false);
    }
    if(addingExpense){
        newExpense = (
            <ExpenseForm 
            onSaveExpenseData = {saveExpenseDataHandler} 
            onCancel = {cancelExpenseHandler}
            />
        )
    }

    return(<NewExpenseCard className="new-expense">
        {newExpense}
    </NewExpenseCard>)
}

export default NewExpense;