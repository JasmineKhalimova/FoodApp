import React,{useState} from 'react';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';

function ExpenseItems(props){
    const expense = [
        {
          id: 'e1',
          title: 'Test 1',
          amount: '900', 
          date: new Date(2020, 6, 14),
        },
        {
          id: 'e2',
          title: 'Test 2',
          amount: '900',
          date: new Date(2021, 7, 14),
        },
        {
          id: 'e3',
          title: 'Test 3',
          amount: '900',
          date: new Date(2022, 8, 15),
        }
      ];
      // filetrs 
      const [filteredYear, setFilteredYear] = useState('2020');

      const filterChangeHandler = selectedYear => {
        console.log(selectedYear);
        setFilteredYear(selectedYear);
      }
      
      return (
        <div className="expenses">
          <ExpensesFilter selected = {filteredYear} onChangeFilter={filterChangeHandler}/>
          <ExpenseItem title={expense[0].title} amount={expense[0].amount} date={expense[0].date}></ExpenseItem>
          <ExpenseItem title={expense[1].title} amount={expense[1].amount} date={expense[1].date}></ExpenseItem>
          <ExpenseItem title={expense[2].title} amount={expense[2].amount} date={expense[2].date}></ExpenseItem>
        </div>
      );
}

export default ExpenseItems;