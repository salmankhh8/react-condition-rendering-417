import React from "react";
import Login from "./Login";
var isLoggedIn = true; // creating a logging variiablr to ceheck

const currentTime = new Date().getHours();
console.log(currentTime);

function App() {
  return (
    <div className="container">
      {isLoggedIn ? ( // its a bollean operatoe we not need th pass === true/false
        <h1>Hello</h1> // render hello if loggin
      ) : (
        // render ulogin page if found false
        <Login />
      )}
    </div>
  ); // calling function
}

export default App;
