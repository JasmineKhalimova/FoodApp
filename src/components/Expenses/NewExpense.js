import React, {useState} from "react";

const NewExpense = () => {
    // Multiple states
    const [enterTitle, setEnterTitle] = useState('');
    const [enterAmount, setEnterAmount] = useState('');
    const [enterDate, setEnterDate] = useState('');

    // Single State
    // const [userInput, setUserInput] = useState({
    //     enterTitle: '',
    //     enterAmount: '',
    //     enterDate: ''
    // });

    // Chnage handlers
    const titleChangeHandler = (event) => {
        setEnterTitle(event.target.value);

        // setUserInput({
        //     ...userInput, // use spread operator to copy other values which is not being used here
        //     enterTitle: event.target.value
        // });

        // setUserInput((prevState) => {
        //     return { ...prevState, setEnterTitle: event.target.value };
        // });
    }

    const amountChangeHandler = (event) => {
        setEnterAmount(event.target.value);

        // setUserInput({
        //     ...userInput, // use spread operator to copy other values which is not being used here
        //     enterAmount: event.target.value
        // });

        // using prevState as it will use latest state which is up to date
        // setUserInput((prevState) => {
        //     return { ...prevState, enterAmount: event.target.value };
        // });
        
    }
    const dateChangeHandler = (event) => {
        setEnterDate(event.target.value);

        // This way might not work as it might depend on old and unused state 
        // setUserInput({
        //     ...userInput, // use spread operator to copy other values which is not being used here
        //     enterDate: event.target.value
        // });

        // using prevState as it will use latest state which is up to date
        // setUserInput((prevState) => {
        //     return { ...prevState, enterDate: event.target.value };
        // });
    };

    // On Submit handler
    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enterTitle,
            amount: enterAmount,
            date: new Date(enterDate)
        };
        console.log(expenseData);
        // storing data but deleting from input form
        setEnterTitle('');
        setEnterAmount('');
        setEnterDate('');
    };

    return (
        <div className="new-expense">
            <form className="expense_form" onSubmit={submitHandler}>
                <div className="new-expenses__controls">
                    <div className="expenses__control">
                        <label>Title</label>
                        <input 
                        type="text" 
                        value={enterTitle}
                        onChange={titleChangeHandler}
                        />
                    </div>
                    <div className="expenses__control">
                        <label>Amount</label>
                        <input 
                        type="number" 
                        min="0.01" 
                        strep="0.01" 
                        value={enterAmount}
                        onChange={amountChangeHandler}
                        />
                    </div>
                    <div className="expenses__control">
                        <label>Date</label>
                        <input 
                        type="date" 
                        min="2019-01-01" 
                        max="2022-12-31" 
                        value={enterDate}
                        onChange={dateChangeHandler}
                        />
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