import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOrderDetailsStart } from "../../redux/Orders/orders.actions";
import { useDispatch, useSelector } from "react-redux";
import OrderDetails from "../../components/OrderDetails";
const mapState = ({ ordersData }) => ({
  orderDetails: ordersData["orderDetails"],
});

function Order() {
  const { orderID } = useParams();
  const { orderDetails } = useSelector(mapState);
  const { orderTotal } = orderDetails;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrderDetailsStart(orderID));
  }, []);

  return (
    <div>
      <h1>Order ID: #{orderID}</h1>
      <OrderDetails order={orderDetails} />
      <h3>Total: {orderTotal} $</h3>
    </div>
  );
}

export default Order;
