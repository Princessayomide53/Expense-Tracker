import React, { useEffect, useState, useCallback } from "react";
import "./App.css";
import { Expense } from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";
import Forms from "./components/Practice/Forms";
import Data from "./components/Practice/Data";
import Main from "./components/Practice1/Main";
import MovieList from "./components/Practice2/MovieList";
import AddMovie from "./components/Practice2/AddMovie";
import BackwardCounter from "./components/Practice2/Practice3/BackwardCounter";
import ForwardCounter from "./components/Practice2/Practice3/ForwardCounter";
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
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

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
  // const dummyMovies = [
  //   {
  //     id: "tt01",
  //     title: "Some Dummy Movies",
  //     openingText: "this is the opening text of the movie",
  //     releaseDate: "2021-05-18",
  //   },
  //   {
  //     id: "tt02",
  //     title: "Some Dummy Movies 2",
  //     openingText: "this is the second opening text of the movie",
  //     releaseDate: "2021-05-19",
  //   },
  // ];

  const fetchApiHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://react-http-a3160-default-rtdb.firebaseio.com/movies.json"
      );
      const data = await response.json();
      if (!response.ok) {
        throw new Error("Something is wrong");
      }
      // const transformedData = data.results.map((movieData) => {
      //   return {
      //     id: movieData.episode_id,
      //     title: movieData.title,
      //     openingText: movieData.opening_crawl,
      //     releaseDate: movieData.releaseDate,
      //   };
      // });
      const loadedMovies = [];

      for (const key in data) {
        loadedMovies.push({
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }
      setMovies(loadedMovies);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
    }
  }, []);

  useEffect(() => {
    fetchApiHandler();
  }, [fetchApiHandler]);

  async function addMovieHandler(movie) {
    const response = await fetch(
      "https://react-http-a3160-default-rtdb.firebaseio.com/movies.json",
      {
        method: "POST",
        body: JSON.stringify(movie),
        headers: {
          "Content-Type": "application.json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  }
  //convert to json

  return (
    <div className="">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense data={expenses} />
      <Forms onAddData={addData} />
      <Data item={data} />
      <Main />
      <AddMovie onAddMovie={addMovieHandler} />
      <BackwardCounter />
      <ForwardCounter />
      <section className="bg-green-200 mt-[1rem] mb-10 max-w-[60rem] m-auto p-7 rounded-lg text-center">
        <button
          onClick={fetchApiHandler}
          className="text-xl font-semibold px-7 py-2 bg-yellow-200 rounded-2xl"
        >
          Fetch Movies
        </button>
      </section>
      <section className="bg-green-200 h-full mb-5 max-w-[60rem] m-auto p-7 rounded-lg text-center">
        {!isLoading && movies.length === 0 && <p>No Movies found</p>}
        {!isLoading && movies.length > 0 && <MovieList movie={movies} />}
        {isLoading && <p>Loading........</p>}
        {!isLoading && error && <p>{error}</p>}
      </section>
    </div>
  );
}

export default App;
