import React, { useRef } from "react";
import Cards from "../UI/Cards";

const Forms = (props) => {
  // const [enteredUsername, setEnteredUsername] = useState("");
  // const [enteredAge, setEnteredAge] = useState("");

  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // const usernameHandler = (e) => {
  //   setEnteredUsername(e.target.value);
  // };

  // const ageHandler = (e) => {
  //   setEnteredAge(e.target.value);
  // };

  const submitForm = (e) => {
    e.preventDefault();
    const enteredUserName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    if (
      enteredUserName.trim().length === 0 ||
      enteredUserAge.trim().length === 0
    ) {
      return;
    }
    if (+enteredUserAge < 1) {
      return;
    }
    props.onAddData(enteredUserName, enteredUserAge);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };
  return (
    <Cards className="bg-purple-400 max-w-[30rem] h-80 m-auto mb-7">
      <form onSubmit={submitForm}>
        <div className=" flex flex-col space-y-7 p-7">
          <label htmlFor="Username" className="text-white font-bold">
            Username
          </label>
          <input
            type="text"
            className="w-[24rem] p-[0.4rem] rounded-xl"
            placeholder="Enter name"
            // onChange={usernameHandler}
            // value={enteredUsername}
            ref={nameInputRef}
          />
          <label htmlFor="Age" className="text-white font-bold">
            Age
          </label>
          <input
            type="number"
            className="w-[24rem] p-[0.4rem] rounded-xl"
            placeholder="Enter age"
            // onChange={ageHandler}
            // value={enteredAge}
            ref={ageInputRef}
          />
        </div>
        <button
          type="submit"
          className=" bg-slate-500 py-3 px-7 rounded-xl text-white font-bold mx-7 "
        >
          Add name and Age{" "}
        </button>
      </form>
    </Cards>
  );
};

export default Forms;
