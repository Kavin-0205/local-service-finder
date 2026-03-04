import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    alert("Login Successful");
  };
  return (
    <div className="login-container">
      <div className="login">
        <h2>Login</h2>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email</label><br></br>
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Password</label><br></br>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
        <div className="divider">OR</div>

        <div className="register-buttons">
          <button
            className="user-btn"
            onClick={() => navigate("/userregister")}
          >
            Register as User
          </button>

          <button
            className="provider-btn"
            onClick={() => navigate("/providerregister")}
          >
            Register as Provider
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;