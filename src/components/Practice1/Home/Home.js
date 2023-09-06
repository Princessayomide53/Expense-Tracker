import React from "react";
import Card1 from "../../UI/Card1";
// import Button from "../../UI/Button";

const Home = (props) => {
  // console.log(props.OnLogout);
  return (
    <Card1 className="max-w-2xl w-[40%] flex-col space-y-5 h-60 rounded-xl shadow-2xl bg-white flex justify-center items-center m-auto ">
      <h2 className="text-4xl font-bold text-center block">
        Welcome back Home{" "}
      </h2>
      {/* <Button onClick={props.onLogout}>Logout</Button> */}
    </Card1>
  );
};

export default Home;
