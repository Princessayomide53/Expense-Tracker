import React from "react";

const Data = (props) => {
  return (
    <div>
      <ul className="max-w-[50%] m-auto">
        {props.item.map((items) => (
          <div
            className="flex justify-between border-2 border-zinc-300 bg-pink-700 rounded-2xl h-12 text-white font-bold p-3"
            key={items.id}
          >
            <li>Name: {items.Name}</li>
            <li>Age: {items.Age}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Data;
