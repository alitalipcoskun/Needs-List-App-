
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpenses/NewExpense';



function App() {
  const expenses = [{ id: 'e1', title: 'Macbook', amount: '99.99', date: new Date("2023-03-03") }, 
  { id: 'e2', title: 'Airpods', amount: '100.99', date: new Date("2022-02-01")},
  { id: 'e3', title: 'Monitor', amount: '199.99', date: new Date("2024-02-14")},
  { id: 'e4', title: 'Home', amount: '100.199.99', date: new Date("2025-11-24") }
  ]

  const addExpenseHandler = (expense) => {
    console.log('In App.js');
    console.log(expense)
    expenses.push(expense);
  }
  return (
    <div>
      <NewExpense onAddingExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses}></Expenses>
    </div>

  );
}

export default App;
