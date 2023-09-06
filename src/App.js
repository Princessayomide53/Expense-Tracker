import React, { useState } from "react";
import "./App.css";
import { Expense } from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";
import Forms from "./components/Practice/Forms";
import Data from "./components/Practice/Data";
import MainHeader from "./components/Practice1/MainHeader/MainHeader";
import Login from "./components/Practice1/Login/Login";
import Home from "./components/Practice1/Home/Home";
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

// const dummy_data = [
//   { id: 1, Name: "Weasley Fizzyman", Age: 89 },
//   { id: 2, Name: "Malacholly Grace", Age: 39 },
// ];
function App() {
  const [expenses, setExpenses] = useState(initial_Expenses);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [data, setData] = useState([]);

  const addData = (Uname, Uage) => {
    setData((prevData) => {
      return [
        ...prevData,
        { Username: Uname, Age: Uage, id: Math.random().toString() },
      ];
    });
  };

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  const loginHandler = () => {
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense data={expenses} />
      <Forms onAddData={addData} />
      <Data item={data} />

      <div>
        <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
        <main>
          {!isLoggedIn && <Login onLogin={loginHandler} />}
          {isLoggedIn && <Home onLogout={logoutHandler} />}
        </main>
      </div>
    </div>
  );
}

export default App;
