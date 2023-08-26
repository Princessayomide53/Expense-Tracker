import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
  if (props.item.length === 0) {
    return (
      <h2 className="text-center text-white text-2xl font-bold pt-5">
        No Expenses found
      </h2>
    );
  }

  return (
    <ul>
      {props.item.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
