import React from "react";
import Card1 from "../../UI/Card1";
import useCounter from "../../../Hooks/use-counter";

const ForwardCounter = () => {
  const counter = useCounter();
  return <Card1 className="w-56 bg-pink-100 h-32 my-7">{counter}</Card1>;
};

export default ForwardCounter;
