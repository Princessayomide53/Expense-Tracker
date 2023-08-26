import React from "react";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);

    // if (localStorage.getItem("expense") === null) {
    //   expense = [];
    // } else {
    //   expense = JSON.parse(localStorage.getItem("expense"));
    // }
    // expense.push(expenseData);
    //   localStorage.setItem("expenses", JSON.stringify(expenseData));
    props.onAddExpense(expenseData);
  };

  // const getItem =
  // const parsed = JSON.parse(getItem);
  return (
    <div className="bg-[#a892ee] p-[1rem] m-[2rem_auto] w-[58rem] max-w-[95%] rounded-xl text-center shadow-lg">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
