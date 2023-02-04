import React from "react";
import './expense-filter.css';

function ExpenseFilter(props){

    const filterChangeHandler = (event) =>{
        props.onFilterChange(event.target.value);
    }
    
    return(<div className = "expense-filter__controls">
        <label>Filter by Year</label>
        <select value={props.selected} onChange={filterChangeHandler}>
            <option>2025</option>
            <option>2024</option>
            <option>2023</option>
            <option>2022</option>
        </select>
    </div>)
}


export default ExpenseFilter;