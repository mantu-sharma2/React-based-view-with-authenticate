import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./Firebase";
import { useNavigate } from "react-router-dom";
import "./LoginForm.module.css";
const LoginForm = (props) => {
  // const currentState = props.currentState;
  const setState = props.setState;
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disableLogin, setdisableLogin] = useState(false);
  const [signInAlert, setsignInAlert] = useState("");

  const onLogin = (e) => {
    setdisableLogin(true);
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setState({ loggedIn: true, user: user });
        setdisableLogin(false);
        navigate("/home");
        console.log(user);
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        // console.log(errorCode, errorMessage);
        setdisableLogin(false);
        setsignInAlert(errorMessage);
      });
  };

  return (
    <div>
      <form>
        <div>
          <label htmlFor="email-address">Email address</label>
          <input
            id="email-address"
            name="email"
            type="email"
            required
            placeholder="Email address"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            required
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <p style={{ color: "red" }}>{signInAlert}</p>
          <button onClick={onLogin} disabled={disableLogin}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
