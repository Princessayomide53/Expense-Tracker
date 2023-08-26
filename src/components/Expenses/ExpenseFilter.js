import React from "react";

const ExpenseFilter = (props) => {
  const dropDownChangeHandler = (e) => {
    props.onChangeFilter(e.target.value);
  };
  return (
    <div>
      <div className="flex justify-between p-5 text-2xl">
        <label className="text-white font-bold">Filter by Year</label>
        <select
          value={props.selected}
          onChange={dropDownChangeHandler}
          className="px-12 py-2 rounded-md font-bold"
        >
          <option value={2023}>2023</option>
          <option value={2022}>2022</option>
          <option value={2021}>2021</option>
          <option value={2020}>2020</option>
          <option value={2019}>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
