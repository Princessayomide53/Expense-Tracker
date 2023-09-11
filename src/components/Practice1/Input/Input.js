import React, { useRef, useImperativeHandle } from "react";

const Input = React.forwardRef((props, ref) => {
  const InputRef = useRef();

  const activate = () => {
    InputRef.current.focus();
  };

  useImperativeHandle(ref, () => {
    return {
      focus: activate,
    };
  });

  return (
    <div className={` space-x-12 flex`}>
      <label htmlFor={props.id} className="font-bold">
        {props.label}
      </label>
      <input
        type="props.type"
        id="props.id"
        value={props.stateHandle}
        className={`w-[80%] rounded-lg py-2 pl-3 border-2 border-purple-400 ${
          props.isValid === false
            ? "border-red-600 border-2 focus:bg-red-500"
            : ""
        }`}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
});

export default Input;
