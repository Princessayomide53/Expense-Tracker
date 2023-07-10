// import React from "react";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  
  return (
    <div className="m-auto w-[900px] bg-black">
    <div className="flex justify-between items-center shadow-md p-3 m-5 rounded-xl bg-[#4b4b4b]">
      <ExpenseDate date={props.date}/>
      <div className="flex gap-5 items-end flex-1 justify-start flex-row">
        <h2 className=" text-2xl flex-1 text-white mx-5 py-3"> {props.title}</h2>
        <div className="text-2xl font-bold text-white bg-[#40005d] border-2 border-white p-3 rounded-xl">${props.amount}</div>
      </div>
      </div>
    </div>
  ); 
}

export default ExpenseItem;
