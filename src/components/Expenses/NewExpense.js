import React, {useState} from "react";

const NewExpense = () => {
    // Change Handlers
    const [enterTitle, setEnterTitle] = useState('');
    const [enterAmount, setEnterAmount] = useState('');
    const [enterDate, setEnterDate] = useState('');

    const titleChangeHandler = (event) => {
        setEnterTitle(event.target.value);
    }

    const amountChangeHandler = (event) => {
        setEnterAmount(event.target.value);
    }
    const dateChangeHandler = (event) => {
        setEnterDate(event.target.value);
    }

    return (
        <div className="new-expense">
            <form className="expense_form">
                <div className="new-expenses__controls">
                    <div className="expenses__control">
                        <label>Title</label>
                        <input type="text" onChange={titleChangeHandler}></input>
                    </div>
                    <div className="expenses__control">
                        <label>Amount</label>
                        <input type="number" min="0.01" strep="0.01" onChange={amountChangeHandler}/>
                    </div>
                    <div className="expenses__control">
                        <label>Date</label>
                        <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
                    </div>
                </div>
                <div className="actions">
                    <button type="submit">Add Expense</button>
                </div>
            </form>
        </div>
    )
}

export default NewExpense;