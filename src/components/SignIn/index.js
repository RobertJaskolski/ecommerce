import React, { useState, useEffect } from "react";
import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  emailSignInStart,
  googleSignInStart,
} from "../../redux/User/user.actions";
import { Link, useHistory } from "react-router-dom";

import Button from "../Forms/Button";
import AuthWrapper from "../AuthWrapper";
import Input from "../Forms/Input";

const mapState = ({ user }) => ({
  currentUser: user["currentUser"],
});

function SignIn(props) {
  const dispatch = useDispatch();
  const { currentUser } = useSelector(mapState);
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const configAuthWrapper = {
    headline: "Login",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(emailSignInStart({ email, password }));
  };

  const handleGoogleSignIn = () => {
    dispatch(googleSignInStart());
  };

  useEffect(() => {
    if (currentUser) {
      setEmail("");
      setPassword("");
      history.push("/");
    }
  }, [currentUser]);

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
              <Button onClick={handleGoogleSignIn}>Sing in with Google</Button>
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
