import React from "react";
import { Card } from "../UI/Card";

const Movie = (props) => {
  return (
    <Card className="bg-pink-200 m-10 py-7 p-2" key={props.id}>
      <li className="">
        <h2 className="text-4xl font-bold">{props.title}</h2>
        <h3 className="text-lg semibold">{props.openingText}</h3>
        <p className="text-lg">{props.releaseDate}</p>
      </li>
    </Card>
  );
};

export default Movie;
