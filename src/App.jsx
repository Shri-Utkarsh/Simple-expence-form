import { useState } from "react";
import "./App.css";
import ExpenseForm from "./Components/ExpenseForm";
import ExpenstTable from "./Components/ExpenstTable";
import expenseData from "./expenseData";
import { useLocalStorage } from "./hooks/useLocalStorsge";

function App() {
  const [expenses, setExpenses] = useLocalStorage('expenses', expenseData);


  return (
    <main>
      <h1>Track Your Expense</h1>

      <div className="expense-tracker">
        <ExpenseForm setExpenses={setExpenses} />
        <ExpenstTable expenses={expenses} setExpenses={setExpenses} />
      </div>
    </main>
  );
}

export default App;
