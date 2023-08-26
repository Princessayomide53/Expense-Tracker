import React, { useState } from "react";
import "./App.css";
import { Expense } from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";
import Wrapper from "./components/Practice/Wrapper";
import Data from "./components/Practice/Data";
// import Form from "./components/Practice/Form";

const initial_Expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New Tv",
    amount: 799.4,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const dummy_data = [
  { id: 1, Name: "Weasley Fizzyman", Age: 89 },
  { id: 2, Name: "Malacholly Grace", Age: 39 },
];
function App() {
  const [expenses, setExpenses] = useState(initial_Expenses);

  const [data, setData] = useState(dummy_data);

  const addData = (data) => {
    setData((prevData) => {
      return [data, ...prevData];
    });
  };

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className="">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense data={expenses} />
      <Wrapper onAddData={addData} />
      <Data item={data} />
    </div>
  );
}

export default App;
