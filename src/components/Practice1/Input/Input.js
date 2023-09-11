import React, { useRef, useImperativeHandle } from "react";

const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();

  const activate = () => {
    inputRef.current.focus();
  };

  useImperativeHandle(ref, () => {
    return {
      focus: activate,
    };
  });

  return (
    <div className={`items-center gap-8 flex`}>
      <label htmlFor={props.id} className="font-bold text-lg space-x-5 w-28">
        {props.label}
      </label>
      <input
        type={props.type}
        ref={inputRef}
        id={props.id}
        value={props.stateHandle}
        className={`w-[80%] rounded-lg py-2 pl-3 border-2 border-purple-400 ${
          props.isValid === false
            ? "border-red-600 border-2 focus:bg-red-200"
            : ""
        }`}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
});

export default Input;
