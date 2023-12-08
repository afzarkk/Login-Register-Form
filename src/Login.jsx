import React, { useState } from "react";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="auth-form-container">
      <h2>Login</h2>
      <form className="Login-form" onClick={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="UserEmail"
          id="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="password"
          id="password"
          name="password"
          onChange={(e) => setPass(e.target.value)}
        />
        <button>Log In</button>
      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch("register")}>
        Don't Have an Account? Register Here
      </button>
    </div>
  );
};

export default Login;
