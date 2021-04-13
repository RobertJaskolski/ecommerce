import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserHistory } from "../../redux/Orders/orders.actions";
import "./styles.scss";

const mapState = ({ user }) => ({
  currentUser: user["currentUser"],
});

function Dashboard(props) {
  const dispatch = useDispatch();
  const { currentUser } = useSelector(mapState);

  useEffect(() => {
    dispatch(getUserHistory(currentUser["id"]));
  }, []);

  return (
    <div>
      <h1>Welcome to your account</h1>
    </div>
  );
}

export default Dashboard;
