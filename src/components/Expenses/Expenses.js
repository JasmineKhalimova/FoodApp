import React,{useState} from 'react';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';

function ExpenseItems(props){
      // filetrs 
      const [filteredYear, setFilteredYear] = useState('2020');

      const filterChangeHandler = selectedYear => {
        console.log(selectedYear);
        setFilteredYear(selectedYear);
      }
      
      return (
        <div className="expenses">
          <ExpensesFilter selected = {filteredYear} onChangeFilter={filterChangeHandler}/>
          
          {props.items.map((expense) => (
            <ExpenseItem 
              title = {expense.title}
              amount = {expense.amount}
              date = {expense.date}
            />
          ))}
        </div>
      );
}

export default ExpenseItems;