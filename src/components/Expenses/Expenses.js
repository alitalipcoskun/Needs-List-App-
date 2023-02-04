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
    return (<Card className="expense-list">
        <ExpenseFilter onFilterChange={filterChangeHandler} selected={userYear}></ExpenseFilter>
        {props.items.map(expense => <ExpenseItem date={expense.date} title={expense.title} amount={expense.amount}></ExpenseItem>)}
    </Card>);
}

export default Expenses;