import './new-expense-card.css';

function NewExpenseCard(props) {
    const classes = 'new-expense-card ' + props.className;
    return (<div className={classes}>{props.children}</div>)
}


export default NewExpenseCard;