import './expense-item.css';
import ExpenseDate from './ExpenseDate';

function ExpenseItems(props) {
    return (
        <div className='expense-item__'>
            <ExpenseDate date= {props.date}></ExpenseDate>
            <div className='expense-item__properties'>
                <div className='expense-item__name'>{props.title}</div>
                <div className='expense-item__amount'>${props.amount}</div>
            </div>
        </div>
    )
}

export default ExpenseItems;