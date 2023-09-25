import React, { useState, useEffect } from "react";
import "./App.css";
import { Expense } from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";
import Forms from "./components/Practice/Forms";
import Data from "./components/Practice/Data";
import Main from "./components/Practice1/Main";
import MovieList from "./components/Practice2/MovieList";
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
  const dummyMovies = [
    {
      id: "tt01",
      title: "Some Dummy Movies",
      openingText: "this is the opening text of the movie",
      releaseDate: "2021-05-18",
    },
    {
      id: "tt02",
      title: "Some Dummy Movies 2",
      openingText: "this is the second opening text of the movie",
      releaseDate: "2021-05-19",
    },
  ];

  return (
    <div className="">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense data={expenses} />
      <Forms onAddData={addData} />
      <Data item={data} />

      <Main />

      <section className="bg-green-200 mt-[1rem] mb-10 max-w-[60rem] m-auto p-7 rounded-lg text-center">
        <button className="text-xl font-semibold px-7 py-2 bg-yellow-200 rounded-2xl">
          Fetch Movies
        </button>
      </section>

      <section className="bg-green-200 h-[30rem] max-w-[60rem] m-auto p-7 rounded-lg text-center">
        <MovieList movies={dummyMovies} />
      </section>
    </div>
  );
}

export default App;
