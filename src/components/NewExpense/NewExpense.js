import React from "react";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random.toString(),
    };
    props.onAddExpense(expenseData);
  };
  return (
    <div className="bg-[#a892ee] p-[1rem] m-[2rem_auto] w-[58rem] max-w-[95%] rounded-xl text-center shadow-lg">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
