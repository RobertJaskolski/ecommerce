import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserHistory } from "../../redux/Orders/orders.actions";
import "./styles.scss";
import OrderHistory from "../../components/OrderHistory";

const mapState = ({ user, ordersData }) => ({
  currentUser: user["currentUser"],
  ordersHistory: ordersData["orderHistory"].data,
});

function Dashboard(props) {
  const dispatch = useDispatch();
  const { currentUser, ordersHistory } = useSelector(mapState);

  useEffect(() => {
    dispatch(getUserHistory(currentUser["id"]));
  }, []);

  return (
    <div>
      <h1>Order History</h1>
      <OrderHistory orders={ordersHistory} />
    </div>
  );
}

export default Dashboard;
