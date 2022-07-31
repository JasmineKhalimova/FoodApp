import './css/global.scss';
import ExpenseItems from './components/Expenses/ExpenseItems';
import NewExpense from './components/Expenses/NewExpense';

function App() {
  const addExpenseHandler = expense => {
    console.log('addExpenseHandler');
    console.log(expense);
  }

  return (
    <div>
      <NewExpense addAddExpense={addExpenseHandler}/>
      <ExpenseItems />
    </div>
  );
}

export default App;
