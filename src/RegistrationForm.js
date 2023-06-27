import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./Firebase";
import "./Login.css";

const RegistrationForm = () => {
  // const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disableSubmit, setdisableSubmit] = useState(false);
  const [signupSucess, setsignupSucess] = useState("");

  const onSubmit = async (e) => {
    setdisableSubmit(true);
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setdisableSubmit(false);
        setsignupSucess("SuccessFully Registered, Please Login");
        // navigate("/login");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };

  return (
    <div>
      <form className="Register">
        <div>
          <label htmlFor="email-address">Email address</label>
          <input
            type="email"
            label="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email address"
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            label="Create password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Password"
          />
        </div>

        <button type="submit" onClick={onSubmit} disabled={disableSubmit}>
          Sign up
        </button>
      </form>

      <p style={{ color: "red" }}>{signupSucess}</p>
      <p>
        Already have an account? <a href={`/`}>SignIn</a>
      </p>
    </div>
  );
};

export default RegistrationForm;
