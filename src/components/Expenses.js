import ExpenseItem from "./ExpenseItem";
import './expense-item.css';
import Card from "./Card";


function Expenses(props){
    const date = new Date("2023-03-03");
    return(<Card className="expense-list">
        <ExpenseItem date= {date} title= "Macbook" amount = "99.99"/>
        <ExpenseItem date= {date} title= "Macbook" amount = "99.99"/>
        <ExpenseItem date= {date} title= "Macbook" amount = "99.99"/>
        <ExpenseItem date= {date} title= "Macbook" amount = "99.99"/>
    </Card>);
}

export default Expenses;