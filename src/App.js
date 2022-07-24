import './css/global.scss';
import ExpenseItems from './components/Expenses/ExpenseItems';
import NewExpense from './components/Expenses/NewExpense';

function App() {
  return (
    <div>
      <NewExpense />
      <ExpenseItems />
    </div>
  );
}

export default App;
