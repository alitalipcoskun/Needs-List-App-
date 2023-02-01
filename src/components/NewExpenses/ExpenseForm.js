import React, {useState} from "react";



function ExpenseForm(){

    const [userInput, setUserInput] = useState({
        title: '',
        cost: '',
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
            return {...prevState, cost: event.target.value}
        });
    }

    const submitHandler = (event) =>{
        console.log(userInput)
        const {cost, date, title} = userInput;
        event.preventDefault();
        const expense = {
            title: title,
            cost: cost,
            date: new Date(date),
        }
        console.log(expense);
        setUserInput({
            cost: '',
            title: '',
            date: '',
        })
    }
    const {cost, date, title} = userInput;
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
                    <input type='number' value= {cost} min="0.01" step= "0.01" onChange={costChangeHandler}></input>
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
            </div>
        </form>
    )
}


export default ExpenseForm;