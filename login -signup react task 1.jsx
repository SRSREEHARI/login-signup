import React, { useState } from "react";
import "./App.css";
import Login from "./components/Login.jsx";
import SignUp from "./components/Signup.jsx";
import Home from "./components/Home.jsx";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [toggleForm, setToggleForm] = useState(false);

  const IsLoggedIn = () => {
    setLoggedIn(!loggedIn);
  };

  const ToggleForm = () => {
    setToggleForm(!toggleForm);
  };

  return (
    <>
      {loggedIn ? (
        <Home IsLoggedIn={IsLoggedIn} />
      ) : toggleForm ? (
        <Login ToggleForm={ToggleForm} IsLoggedIn={IsLoggedIn} />
      ) : (
        <SignUp ToggleForm={ToggleForm} />
      )}
    </>
  );
}

export default App;
