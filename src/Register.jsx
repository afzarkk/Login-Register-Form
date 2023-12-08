import React, { useState } from "react";

const Register = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };
  return (
    <div className="auth-form-container">
      <h2>Register</h2>
      <form className="Register-form" onClick={handleSubmit}>
        <label htmlFor="fullname">Full Name</label>
        <input
          value={name}
          type="name"
          id="name"
          name="name"
          placeholder="Full Name"
        />
        <label htmlFor="email">Email</label>
        <input
          value={email}
          type="email"
          placeholder="UserEmail"
          id="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          value={pass}
          type="password"
          placeholder="password"
          id="password"
          name="password"
          onChange={(e) => setPass(e.target.value)}
        />
        <button>Log In</button>
      </form>
      <button  className="link-btn" onClick={() => props.onFormSwitch("login")}>
        Already Have an Account? Login Here
      </button>
    </div>
  );
};

export default Register;
