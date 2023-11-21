import React, { useImperativeHandle, useRef } from "react";

const Input = React.forwardRef((props, ref) => {
  const classes = " Input " + props.className;
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    value: () => {
      return inputRef.current.value;
    },
  }));

  return (
    <div>
      <label className="text-2xl text-black block p-2" htmlFor="props.id">
        {props.label}
      </label>
      <input
        type="props.type"
        ref={inputRef}
        id="props.id"
        className={classes}
      />
    </div>
  );
});

export default Input;
