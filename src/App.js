
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpenses/NewExpense';



function App() {
  const addExpenseHandler = (expense) => {
    console.log('In App.js');
    console.log(expense)
  }
  return (
    <div>
      <NewExpense onAddingExpense = {addExpenseHandler}></NewExpense>
      <Expenses></Expenses>
    </div>
    
  );
}

export default App;
