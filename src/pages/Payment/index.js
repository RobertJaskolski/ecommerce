import React from "react";
import PaymentDetails from "../../components/PaymentDetails";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { publishableKey } from "./../../stripe/stripeConfig";

const stripePromise = loadStripe(publishableKey);

function Payment() {
  return (
    <Elements stripe={stripePromise}>
      <PaymentDetails />
    </Elements>
  );
}

export default Payment;
