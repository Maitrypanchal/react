import React from 'react';
import './LoginForm.css';

const LoginForm = () => {
  return (
    <div className="login-container">
      <h1>Login</h1>
      <p>Don't have an account? <a href="#">Create your account</a></p>
      <form>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
          <a href="#" className="forgot-password">Forgot Password?</a>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;