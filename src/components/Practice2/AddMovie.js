import React, { useRef } from "react";
import { Card } from "../UI/Card";
import Input from "../UI/Input";
// import Button from "../UI/Button";

const AddMovie = (props) => {
  const titleRef = useRef();
  const openingTextRef = useRef();
  const releaseDateRef = useRef();

  const movieHandler = (e) => {
    e.preventDefault();

    const movie = {
      title: titleRef.current.value(),
      openingText: openingTextRef.current.value(),
      releaseDate: releaseDateRef.current.value(),
    };
    props.onAddMovie(movie);
  };
  return (
    <Card className="bg-green-200 h-[35rem] mt-10  mb-10 max-w-[60rem] m-auto p-12 rounded-lg ">
      <form onSubmit={movieHandler}>
        <Input
          label="Title"
          type="text"
          id="title"
          ref={titleRef}
          className="w-[54rem] rounded-2xl h-10 m-3 pl-7"
        />

        <Input
          label="Opening Text"
          type="text"
          id="text"
          ref={openingTextRef}
          className="w-[54rem] rounded-2xl h-32 m-3 pl-7"
        />

        <Input
          label="Release Date"
          type="text"
          id="date"
          ref={releaseDateRef}
          className="w-[54rem] rounded-2xl h-10 m-3 pl-7"
        />
        <div className="flex justify-center mt-3">
          <button
            type="submit"
            className="bg-purple-400  px-7 py-2 text-xl rounded-full"
          >
            Add Movies
          </button>
        </div>
      </form>
    </Card>
  );
};

export default AddMovie;
