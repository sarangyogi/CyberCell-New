import React, { useState } from 'react';
import './Login.css';
import showHiddenPass from './Loginfunction'; // Import the function

const Login = () => {
  // State to manage password visibility
  const [showPassword, setShowPassword] = useState(false);

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container">
      <div className="login__content">
        <img
          src="https://assets.codepen.io/7773162/4kNYC.jpeg"
          alt="login image"
          className="login__img"
        />

        <form action="" className="login__form">
          <div>
            <h1 className="login__title">
              <span>Welcome</span> Back!
            </h1>
            <p className="login__description">
              Welcome! Please login to continue.
            </p>
          </div>

          <div>
            <div className="login__inputs">
              <div>
                <label htmlFor="email" className="login__label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email address"
                  required
                  className="login__input"
                />
              </div>

              <div>
                <label htmlFor="password" className="login__label">
                  Password
                </label>

                <div className="login__box">
                  <input type={showPassword ? 'text' : 'password'} id="password" placeholder="Enter your password" required className="login__input"/>
                  <i
                    className={`ri-eye${
                      showPassword ? '-line' : '-off-line'
                    } login__eye`}
                    id="input-icon"
                    onClick={togglePasswordVisibility}
                  ></i>
                </div>
              </div>
            </div>

            <div className="login__check">
              <input
                type="checkbox"
                className="login__check-input"
                id="remember-me"
              />
              <label htmlFor="remember-me" className="login__check-label">
                Remember me
              </label>
            </div>
          </div>

          <div>
            <div className="login__buttons">
              <button type="submit" className="login__button">
                Log In
              </button>
              <button className="login__button login__button-ghost">
                Sign Up
              </button>
            </div>

            <a href="#" className="login__forgot">
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
