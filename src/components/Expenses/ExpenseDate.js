function ExpenseDate(props) {
    const month = props.date.toLocaleString('en-US', {month: 'long'});
    const year = props.date.getFullYear();
    const day = props.date.toLocaleString('en-US', {day: '2-digit'});
    return (<div className='expense-item__date'>
        <div>{day}-</div>
        <div>{month}-</div>
        <div>{year}</div>
    </div>);
}

export default ExpenseDate;