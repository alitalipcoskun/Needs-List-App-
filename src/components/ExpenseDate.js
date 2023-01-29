function ExpenseDate(props) {
    const month = props.date.toLocaleString('en-US', {month: 'long'});
    console.log(month);
    const year = props.date.getFullYear();
    console.log(year)
    const day = props.date.toLocaleString('en-US', {day: '2-digit'});
    console.log(day);
    return (<div className='expense-item__date'>
        <div>{day}-</div>
        <div>{month}-</div>
        <div>{year}</div>
    </div>);
}

export default ExpenseDate;