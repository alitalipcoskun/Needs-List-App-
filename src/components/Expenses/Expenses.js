import React, {useState} from "react";
import ExpenseItem from "./ExpenseItem";
import './expense-item.css';
import Card from "./../UI/Card";
import ExpenseFilter from "./ExpenseFilter";


function Expenses(props){
    const [userYear, setSelectedYear] = useState('2022');
    const filterChangeHandler = (selectedYear) => {
        console.log("In Expenses.js");
        console.log(selectedYear);
        setSelectedYear(selectedYear);
    }
    const date = new Date("2023-03-03");
    return(<Card className="expense-list">
        <ExpenseFilter onFilterChange={filterChangeHandler} selected = {userYear}></ExpenseFilter>
        <ExpenseItem date= {date} title= "Macbook" amount = "99.99"/>
        <ExpenseItem date= {date} title= "Macbook" amount = "99.99"/>
        <ExpenseItem date= {date} title= "Macbook" amount = "99.99"/>
        <ExpenseItem date= {date} title= "Macbook" amount = "99.99"/>
    </Card>);
}

export default Expenses;