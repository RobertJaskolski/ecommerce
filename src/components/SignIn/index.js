import React, { useState } from "react";
import "./styles.scss";
import { singInWithGoogle, auth } from "../../firebase/utils";
import { Link } from "react-router-dom";

import Button from "../Forms/Button";
import AuthWrapper from "../AuthWrapper";
import Input from "../Forms/Input";

function SignIn(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const configAuthWrapper = {
    headline: "Login",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setEmail("");
      setPassword("");
      console.log("udało się ");
      props.history.push("/");
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
            handleChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            handleChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit">LogIn</Button>

          <div className="socialSingin">
            <div className="row">
              <Button onClick={singInWithGoogle}>Sing in with Google</Button>
            </div>
          </div>

          <div className="links">
            <Link to="/recovery">Reset Password</Link>
          </div>
        </form>
      </div>
    </AuthWrapper>
  );
}

export default SignIn;
