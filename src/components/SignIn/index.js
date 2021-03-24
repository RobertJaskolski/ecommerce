import React, { useState } from "react";
import "./styles.scss";
import Button from "../Forms/Button";
import { singInWithGoogle, auth } from "../../firebase/utils";
import AuthWrapper from "../AuthWrapper";
import Input from "../Forms/Input";

function SignIn(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const configAuthWrapper = {
    headline: "Login",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") setEmail(value);
    else if (name === "password") setPassword(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setEmail("");
      setPassword("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AuthWrapper {...configAuthWrapper}>
      <div className="formWrap">
        <form onSubmit={handleSubmit}>
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
          <Button type="submit">LogIn</Button>
          <div className="socialSingin">
            <div className="row">
              <Button onClick={singInWithGoogle}>Sing in with Google</Button>
            </div>
          </div>
        </form>
      </div>
    </AuthWrapper>
  );
}

export default SignIn;
