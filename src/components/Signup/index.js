import React, { useEffect, useState } from "react";
import { auth, handleUserProfile } from "../../firebase/utils";
import "./styles.scss";

import Input from "../Forms/Input";
import Button from "../Forms/Button";
import AuthWrapper from "../AuthWrapper";

function Signup() {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const configAuthWrapper = {
    headline: "Sign in",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "displayName") setDisplayName(value);
    else if (name === "email") setEmail(value);
    else if (name === "password") setPassword(value);
    else if (name === "confirmPassword") setConfirmPassword(value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setErrors([...errors, "Password Don't match "]);
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await handleUserProfile(user, { displayName });
      setDisplayName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setErrors([]);
    } catch (err) {
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
            onChange={handleChange}
          />
          <Input
            type="email"
            name="email"
            value={email}
            placeholder="E-mail"
            onChange={handleChange}
          />
          <Input
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={handleChange}
          />
          <Input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            placeholder="Confirm Password"
            onChange={handleChange}
          />

          <Button type="submit">Register</Button>
        </form>
      </div>
    </AuthWrapper>
  );
}

export default Signup;
