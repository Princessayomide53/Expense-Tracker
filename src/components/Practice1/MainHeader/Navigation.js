import React from "react";

const Navigation = (props) => {
  // console.log(props.onLogout);
  return (
    <div className="flex space-x-5">
      <ul className="flex space-x-5 text-white text-2xl font-bold">
        {props.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
      </ul>
      {props.isLoggedIn && (
        <button
          onClick={props.onLogout}
          className="bg-purple-500 text-white font-bold px-10 py-2 rounded-2xl"
        >
          Logout
        </button>
      )}
    </div>
  );
};

export default Navigation;
