import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import './expense-item.css';
import Card from "./../UI/Card";
import ExpenseFilter from "./ExpenseFilter";


function Expenses(props) {
    const [userYear, setSelectedYear] = useState('2022');
    const filterChangeHandler = (selectedYear) => {
        console.log("In Expenses.js");
        console.log(selectedYear);
        setSelectedYear(selectedYear);
    }
    const filteredExpense = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === userYear; 
    });

    return (<Card className="expense-list">
        <ExpenseFilter onFilterChange={filterChangeHandler} selected={userYear}></ExpenseFilter>
        
        
        {filteredExpense.length === 0 ? <p className="error-message">No item on the list.</p> : filteredExpense.map((expense) => {
            return <ExpenseItem key={expense.id} date={expense.date} title={expense.title} amount={expense.amount}></ExpenseItem>
        }
        )}
        
    </Card>);
}

export default Expenses;