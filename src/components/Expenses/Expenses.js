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
    return(<Card className="expense-list">
        <ExpenseFilter onFilterChange={filterChangeHandler} selected = {userYear}></ExpenseFilter>
        <ExpenseItem date= {props.items[0].date} title= {props.items[0].title} amount = {props.items[0].amount}/>
        <ExpenseItem date= {props.items[1].date} title= {props.items[1].title} amount = {props.items[1].amount}/>
        <ExpenseItem date= {props.items[2].date} title= {props.items[2].title} amount = {props.items[2].amount}/>
        <ExpenseItem date= {props.items[3].date} title= {props.items[3].title} amount = {props.items[3].amount}/>
    </Card>);
}

export default Expenses;