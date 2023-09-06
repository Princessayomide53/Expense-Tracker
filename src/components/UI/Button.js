import React from "react";

const Button = (props) => {
  return (
    <div className="flex justify-center">
      <button
        className={`${`rounded-xl px-12 py-2 bg-purple-600 text-white text-lg cursor-pointer  disabled:bg-[#ccc] disabled:hover:bg-[#ccc] disabled:active:bg-[#ccc] disabled:cursor-not-allowed`}`}
        type={props.type || "button"}
        disabled={props.disabled}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    </div>
  );
};

export default Button;
