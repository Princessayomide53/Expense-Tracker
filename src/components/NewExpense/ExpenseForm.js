import React, { useState } from "react";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: enteredDate,
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  const handleChangeTitle = (e) => {
    setEnteredTitle(e.target.value);
  };

  const handleChangeAmount = (e) => {
    setEnteredAmount(e.target.value);
  };

  const handleChangeDate = (e) => {
    setEnteredDate(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-wrap gap-[1rem] mb-[1rem] justify-between  text-left">
        <div className="">
          <label className="font-bold mb-[0.5rem] block text-lg">Title</label>
          <input
            type="text"
            onChange={handleChangeTitle}
            value={enteredTitle}
            className="font-inherit p-[0.5rem] rounded-lg border-2 border-[#ccc] w-[20rem] max-w-[100%]"
          />
        </div>
        <div>
          <label className="font-bold mb-[0.5rem] block text-lg">Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={handleChangeAmount}
            className="font-inherit p-[0.5rem] rounded-lg border-2 border-[#ccc] w-[20rem] max-w-[100%]"
          />
        </div>
        <div>
          <label className="font-bold mb-[0.5rem] block text-lg">Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={handleChangeDate}
            className="font-inherit p-[0.5rem] rounded-lg border-2 border-[#ccc] w-[20rem] max-w-[100%]"
          />
        </div>
      </div>
      <div className="text-right">
        <button
          type="submit"
          className="bg-[#40005d] p-[1rem_2rem] rounded-lg text-white"
        >
          Add expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
