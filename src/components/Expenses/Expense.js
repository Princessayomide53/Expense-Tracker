import React from "react";
import ExpenseItem from "./ExpenseItem";
import { Card } from "../UI/Card";

export const Expense = (props) => {
  return (
    <Card className="p-[32px] bg-[#2a2a2a] my-[32px] mx-auto max-w-[65%]">
      <ExpenseItem
        title={props.data[0].title}
        amount={props.data[0].amount}
        date={props.data[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.data[1].title}
        amount={props.data[1].amount}
        date={props.data[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.data[2].title}
        amount={props.data[2].amount}
        date={props.data[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.data[3].title}
        amount={props.data[3].amount}
        date={props.data[3].date}
      ></ExpenseItem>
    </Card>
  );
};
