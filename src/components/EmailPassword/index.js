import React, { useState, useEffect } from "react";
import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { resetPasswordStart } from "../../redux/User/user.actions";
import { withRouter } from "react-router-dom";

import AuthWrapper from "../AuthWrapper";
import Input from "../Forms/Input";
import Button from "../Forms/Button";

const mapState = ({ user }) => ({
  resetPasswordSuccess: user["resetPasswordSuccess"],
  userErr: user["userErr"],
});

function EmailPassword(props) {
  const { resetPasswordSuccess, userErr } = useSelector(mapState);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState("");

  const configAuthWrapper = {
    headline: "Reset Password",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(resetPasswordStart({ email }));
  };

  useEffect(() => {
    if (resetPasswordSuccess) {
      props.history.push("/login");
    }
  }, [resetPasswordSuccess]);
  useEffect(() => {
    if (Array.isArray(userErr) && userErr.length > 0) {
      setErrors(userErr);
    }
  }, [userErr]);
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
            handleChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="E-mail"
          />
          <Button type="submit">Reset Password</Button>
        </form>
      </div>
    </AuthWrapper>
  );
}

export default withRouter(EmailPassword);
