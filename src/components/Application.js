import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ProfilePage from "./ProfilePage";
import PasswordReset from "./PasswordReset";

function Application() {
  const user = null;

  return user ? (
    <ProfilePage />
  ) : (
    <Router>
      <Route path="/signIn" component={SignIn} />
      <Route path="/signUp" component={SignUp} />
      <Route exact path="/" component={SignUp} />
      <Route path="/passwordReset" component={PasswordReset} />
    </Router>
  );
}
export default Application;
