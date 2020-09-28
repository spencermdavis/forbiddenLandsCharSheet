import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Application from "./components/Application";
import UserProvider from "./providers/UserProvider";
import "./styles/App.scss";

function App() {
  return (
    <UserProvider>
      <Application></Application>
    </UserProvider>
  );
}

export default App;
