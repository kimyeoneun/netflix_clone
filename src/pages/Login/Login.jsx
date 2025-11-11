import React, { useState } from "react";
import "./Login.css";
import logo from "../../assets/logo.png";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // 여기서 진짜 로그인 검증 안 하고
    // 그냥 onLogin만 호출해서 isLoggedIn = true로 바꾸는 거!
    if (onLogin) {
      onLogin();
    }
  };

  return (
    <div className="login">
      <img src={logo} className="login-logo" alt="logo" />

      <div className="login-form">
        <h1>Sign In</h1>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email or phone number"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Sign In</button>

          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label>Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>

        <div className="form-switch">
          <p>
            New to Netflix? <span>Sign up now</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
