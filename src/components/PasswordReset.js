import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const PasswordReset = () => {
  const [email, setEmail] = useState("");
  const [emailHasBeenSent, setEmailHasBeenSent] = useState(false);
  const [error, setError] = useState(null);

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;
    if (name === "userEmail") {
      setEmail(value);
    }
  };

  const sendResetEmail = (event) => {
    event.preventDefault();
  };

  return (
    <div className="passwordReset">
      <h2>Reset your Password</h2>
      <div className="resetAlert">
        <form action="">
          {emailHasBeenSent && <div>An email has been sent to you!</div>}
          {error !== null && <div className="displayError">{error}</div>}
          <label htmlFor="userEmail">Email:</label>
          <input
            type="email"
            name="userEmail"
            id="userEmail"
            value={email}
            placeholder="Input your email"
            onChange={onChangeHandler}
          />
          <button>Send me a reset link</button>
        </form>
        <Link to="/">&larr; back to sign in page</Link>
      </div>
    </div>
  );
};
export default PasswordReset;
