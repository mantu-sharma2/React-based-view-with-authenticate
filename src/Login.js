import React, { useState } from "react";
import "./Login.css";
import LoginForm from "./LoginForm";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import Home from "./Home";

const Login = () => {
  const [currentState, setState] = useState({
    loggedIn: false,
    user: null,
  });

  const handleLoggedIn = (credentialResponse) => {
    const decodedToken = jwt_decode(credentialResponse.credential);
    setState({ loggedIn: true, user: decodedToken });
    // setLoggedIn(true);
  };
  console.log("Login through google");
  return (
    <div className="container">
      {currentState.loggedIn ? (
        <div>
          <Home user={currentState.user} />
        </div>
      ) : (
        <div className="Login-page">
          <div className="left-11">Board</div>
          <div className="right-11">
            <GoogleOAuthProvider clientId="719562758670-ekv7cdgkpc2np66oc4dekjpq88g9l7n5.apps.googleusercontent.com">
              <div className="top-1">
                <div className="form-box">
                  <GoogleLogin
                    onSuccess={(credentialResponse) => {
                      handleLoggedIn(credentialResponse);
                    }}
                    onError={() => {
                      console.log("Login Failed");
                    }}
                  />
                </div>
                <div className="Apple-login">
                  <button className="apple-btn">Sign in with Apple</button>
                </div>
              </div>
              <div className="body">
                <div className="Login-form">
                  <LoginForm currentState={currentState} setState={setState} />
                </div>
                <div className="registration-btn">
                  <p>
                    Didn't have a account{" "}
                    <a href={`/registration`}>Register here</a>
                  </p>
                </div>
              </div>
            </GoogleOAuthProvider>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
