import React from "react";
import { Card } from "../../UI/Card";
import useCounter from "../../../Hooks/use-counter";

const BackwardCounter = () => {
  const counter = useCounter(false);
  return <Card className="w-56 bg-pink-100 h-32 my-7">{counter}</Card>;
};

export default BackwardCounter;
