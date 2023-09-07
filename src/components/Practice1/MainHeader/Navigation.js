import React, { useContext } from "react";
import AuthContext from "../Store/auth-context";

const Navigation = (props) => {
  // console.log(props.onLogout);
  const ctx = useContext(AuthContext);

  return (
    <div className="flex space-x-5">
      <ul className="flex space-x-5 text-white text-2xl font-bold">
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
      </ul>
      {ctx.isLoggedIn && (
        <button
          onClick={ctx.onLogout}
          className="bg-purple-500 text-white font-bold px-10 py-2 rounded-2xl"
        >
          Logout
        </button>
      )}
    </div>
  );
};

export default Navigation;
