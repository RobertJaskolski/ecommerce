import React, { useState } from "react";
import "./styles.scss";
import Button from "../Forms/Button";
import { singInWithGoogle, auth } from "../../firebase/utils";

import Input from "../Forms/Input";

function SingIn(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
    } catch {
      console.log(err);
    }
  };

  return (
    <div className="singin">
      <div className="wrap">
        <h2>LogIn</h2>
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
      </div>
    </div>
  );
}

export default SingIn;
