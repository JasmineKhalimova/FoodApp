import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
      // saving form input values
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString() // generating random ids
    };
    props.addAddExpense(expenseData);
  };

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    )
}

export default NewExpense;