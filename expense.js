import './ExpenseItem.css';
import React,{ useState } from 'react';



const Expense = (props) => {
    const [title, setTitle] = useState(props.title);
    console.log('ExpenseItem evaluated by React');
    const month = props.date.toLocaleString('en-US', {month : 'long'});
    const day = props.date.toLocaleString('en-US', {day : '2-digit'});
    const year = props.date.getFullYear();
    const clickHandler = () =>{
        setTitle('Updated!');
        setAmount('100');
        console.log(amount);
        console.log(title);
    }
    const [amount, setAmount] = useState(props.amount);
    let expensesContent = <p>No exoenses found</p>;

    if(filteredExpenses > 0) {
        expensesContent = filteredExpenses;
    }
    return (
        <div className='expense-item'>
            
            <div>
                <div>{month}</div>
                <div>{year}</div>
                <div>{day}</div>
            </div>
            {filteredExpenses.length === 0 && <p>No exoenses found</p>}
            {filteredExpenses.length > 0 && filteredExpenses}
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>₹{amount}</div>
            </div>
            <button onClick={clickHandler}>Change title</button>
            
        </div>
    );
}

export default Expense;
