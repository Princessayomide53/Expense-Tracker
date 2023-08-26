import React, { useState } from "react";
import Cards from "../UI/Cards";

const Forms = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const usernameHandler = (e) => {
    setEnteredUsername(e.target.value);
  };

  const ageHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  const submitForm = (e) => {
    e.preventDefault();
    const data = {
      Name: enteredUsername,
      Age: enteredAge,
    };
    console.log(data);
    props.onAddSave(data);
    setEnteredUsername("");
    setEnteredAge("");
  };
  return (
    <Cards className="bg-purple-400 max-w-[30rem] h-80 m-auto mb-7">
      <form onSubmit={submitForm}>
        <div className=" flex flex-col space-y-7 p-7">
          <label htmlFor="Username" className="text-white font-bold">
            Username
          </label>
          <input
            type="text"
            className="w-[24rem] p-[0.4rem] rounded-xl"
            placeholder="Enter name"
            onChange={usernameHandler}
            value={enteredUsername}
          />
          <label htmlFor="Age" className="text-white font-bold">
            Age
          </label>
          <input
            type="text"
            className="w-[24rem] p-[0.4rem] rounded-xl"
            placeholder="Enter age"
            onChange={ageHandler}
            value={enteredAge}
          />
        </div>
        <button
          type="submit"
          className=" bg-slate-500 py-3 px-7 rounded-xl text-white font-bold mx-7 "
        >
          Add name and Age{" "}
        </button>
      </form>
    </Cards>
  );
};

export default Forms;
