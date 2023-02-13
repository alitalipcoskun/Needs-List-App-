import React, { useState } from "react";
import './expense-item.css';
import Card from "./../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";

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
        <ExpensesChart expenses={filteredExpense}></ExpensesChart>
        <ExpenseList items = {filteredExpense}></ExpenseList>
    </Card>);
}

export default Expenses;