import React from "react";

const ChartBar = (props) => {
  let barFillHeight = "0%";

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }
  return (
    <div className="h-full flex flex-col items-center w-4">
      <div className="h-full w-full border-2 border-[#313131] rounded-xl bg-[#c3b4f3] overflow-hidden flex flex-col justify-end">
        <div
          className="transition ease-out bg-[#8568db] duration-300"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="font-bold text-[0.5rem] text-center text-white">
        {props.label}
      </div>
    </div>
  );
};

export default ChartBar;
