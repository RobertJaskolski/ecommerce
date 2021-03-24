import React, { useState } from "react";
import "./styles.scss";
import { auth } from "../../firebase/utils";
import { withRouter } from "react-router-dom";

import AuthWrapper from "../AuthWrapper";
import Input from "../Forms/Input";
import Button from "../Forms/Button";

function EmailPassword(props) {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState("");

  const configAuthWrapper = {
    headline: "Reset Password",
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setEmail(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const config = {
        url: "http://localhost:3000/login",
      };
      await auth
        .sendPasswordResetEmail(email, config)
        .then(() => {
          props.history.push("/login");
        })
        .catch((err) => {
          setErrors([...errors, "Email not found"]);
        });
    } catch (err) {
      setErrors([...errors, err]);
    }
  };

  return (
    <AuthWrapper {...configAuthWrapper}>
      <div className="formWrap">
        {errors.length > 0 && (
          <ul>
            {errors.map((err, index) => {
              return <li key={index}>{err}</li>;
            })}
          </ul>
        )}
        <form onSubmit={handleSubmit}>
          <Input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="E-mail"
          />
          <Button type="submit">Reset Password</Button>
        </form>
      </div>
    </AuthWrapper>
  );
}

export default withRouter(EmailPassword);
