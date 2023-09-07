import React from "react";
import Forms from "./Forms";

const Wrapper = (props) => {
  const saveData = (enteredData) => {
    const data = {
      ...enteredData,
      id: Math.random().toString(),
    };
    console.log(data);
    props.onAddData(data);
  };

  return (
    <div>
      <Forms onAddSave={saveData} />
    </div>
  );
};

export default Wrapper;
