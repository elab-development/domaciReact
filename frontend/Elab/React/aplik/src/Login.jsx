import React from 'react';

const Login = () => {
  return (
    <div className="login-container">
      <h2>Login</h2>
      <p>Enter your username or email</p>
      <input type="text" placeholder="Username or Email" className="login-input" />
      <p>Password</p>
      <input type="password" placeholder="Password" className="login-input" />
      <div className="button-container">
        <button className="login-button">Login</button>
        <button className="signin-button">Sign In</button>
      </div>
    </div>
  );
}

export default Login;
