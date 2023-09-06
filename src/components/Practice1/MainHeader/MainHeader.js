import React from "react";
import Navigation from "./Navigation";

const MainHeader = (props) => {
  return (
    <div className="w-full bg-purple-700 h-32 p-10 flex justify-between">
      <h2 className="text-white text-5xl">A Typical Page</h2>
      <Navigation
        isLoggedIn={props.isAuthenticated}
        onLogout={props.onLogout}
      />
    </div>
  );
};

export default MainHeader;
