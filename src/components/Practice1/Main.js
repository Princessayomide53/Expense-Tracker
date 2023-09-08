import React, { useContext } from "react";
import MainHeader from "./MainHeader/MainHeader";
import Login from "./Login/Login";
import Home from "./Home/Home";
import AuthContext from "./Store/auth-context";
// import AuthContext from "./Store/auth-context";

const Main = () => {
  const ctx = useContext(AuthContext);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //   const storageHandle = localStorage.getItem("isLoggedIn");
  //   if (storageHandle === "1") {
  //     setIsLoggedIn(true);
  //   }
  // }, []);

  // const loginHandler = (email, password) => {
  //   localStorage.setItem("isLoggedIn", "1");
  //   setIsLoggedIn(true);
  // };

  // const logoutHandler = () => {
  //   localStorage.removeItem("isLoggedIn");
  //   setIsLoggedIn(false);
  // };
  return (
    // <AuthContext.Provider
    //   value={{ isLoggedIn: isLoggedIn, onLogout: logoutHandler }}
    // >
    <>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </>
    // </AuthContext.Provider>
  );
};

export default Main;
