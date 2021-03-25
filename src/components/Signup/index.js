import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { auth, handleUserProfile } from "../../firebase/utils";
import "./styles.scss";

import Input from "../Forms/Input";
import Button from "../Forms/Button";
import AuthWrapper from "../AuthWrapper";

function Signup(props) {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const configAuthWrapper = {
    headline: "Sign in",
  };

  const resetForm = () => {
    setDisplayName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setErrors([...errors, "Password Don't match "]);
      resetForm();
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await handleUserProfile(user, { displayName });
      resetForm();
      props.history.push("/");
    } catch (err) {
      resetForm();
      console.log(err);
    }
  };

  return (
    <AuthWrapper {...configAuthWrapper}>
      {errors.length > 0 && (
        <ul>
          {errors.map((err, index) => {
            return <li key={index}>{err}</li>;
          })}
        </ul>
      )}

      <div className="formWrap">
        <form onSubmit={handleFormSubmit}>
          <Input
            type="text"
            name="displayName"
            value={displayName}
            placeholder="Full Name"
            handleChange={(e) => {
              setDisplayName(e.target.value);
            }}
          />
          <Input
            type="email"
            name="email"
            value={email}
            placeholder="E-mail"
            handleChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Input
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            handleChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            placeholder="Confirm Password"
            handleChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />

          <Button type="submit">Register</Button>
        </form>
      </div>
    </AuthWrapper>
  );
}

export default withRouter(Signup);
