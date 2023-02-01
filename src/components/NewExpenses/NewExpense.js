import React from "react";
import ExpenseForm from "./ExpenseForm";
import './new-expense.css';
import NewExpenseCard from "../UI/NewExpenseCard";

function NewExpense(){
    return(<NewExpenseCard className="new-expense">
        <ExpenseForm/>
    </NewExpenseCard>)
}

export default NewExpense;