import React, {useState} from "react";



function ExpenseForm(props){

    const [userInput, setUserInput] = useState({
        title: '',
        amount: '',
        date: '',
    })

    const titleChangeHandler = (event) => { 
        /*setUserInput({
            ...userInput,
            enteredTitle: event.target.value
        })*/
        setUserInput((prevState) => {
            return {...prevState, title: event.target.value}
        })
    }
    const dateChangeHandler = (event) => {
        /*setUserInput({
            ...userInput,
            enteredDate: event.target.value,
        });*/
        setUserInput((prevState) => {
            return{...prevState, date: event.target.value}
        });
    }
    const costChangeHandler = (event) => {
        /*setUserInput({
            ...userInput, 
            enteredCost: event.target.value,
        });*/
        setUserInput((prevState) => {
            return {...prevState, amount: event.target.value}
        });
    }

    const submitHandler = (event) =>{
        const {amount, date, title} = userInput;
        event.preventDefault();
        const expense = {
            title: title,
            amount: amount,
            date: new Date(date),
        }
        props.onSaveExpenseData(expense);
        setUserInput({
            amount: '',
            title: '',
            date: '',
        })
    }
    const {amount, date, title} = userInput;
    return (
        <form className = "new-expense__form" onSubmit={submitHandler}>
            <div className = 'new-expense__controls'>
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' value = {title}onChange={titleChangeHandler}></input>
                </div>
            </div>
            <div className = 'new-expense__controls'>
                <div className="new-expense__control">
                    <label>Cost</label>
                    <input type='number' value= {amount} min="0.01" step= "0.01" onChange={costChangeHandler}></input>
                </div>
            </div>
            <div className = 'new-expense__controls'>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' value = {date} min="2021-01-01" max= "2024-12-31" onChange={dateChangeHandler}></input>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
                <button onClick={props.onCancel}>Cancel</button>
            </div>
        </form>
    )
}


export default ExpenseForm;