import React from "react";
import "./styles.scss";
import Button from "../Forms/Button";
import { singInWithGoogle } from "../../firebase/utils";

function SingIn(props) {
  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="singin">
      <div className="wrap">
        <h2>LogIn</h2>
        <div className="formWrap">
          <form onSubmit={handleSubmit}>
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
