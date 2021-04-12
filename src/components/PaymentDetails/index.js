import React, { useState, useEffect } from "react";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { CountryDropdown } from "react-country-region-selector";
import { apiInstance } from "../../Utils";
import { useHistory } from "react-router-dom";
import {
  selectCartTotal,
  selectCartItemsCount,
} from "../../redux/Cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../../redux/Cart/cart.actions";
import "./styles.scss";

const initAddressState = {
  line1: "",
  line2: "",
  city: "",
  state: "",
  postal_code: "",
  country: "",
};

const mapState = createStructuredSelector({
  total: selectCartTotal,
  itemCount: selectCartItemsCount,
});

function PaymentDetails() {
  const dispatch = useDispatch();
  const stripe = useStripe();
  const history = useHistory();
  const elements = useElements();
  const { total, itemCount } = useSelector(mapState);
  const [billingAddress, setBillingAddress] = useState({ ...initAddressState });
  const [shippingAddress, setShippingAddress] = useState({
    ...initAddressState,
  });
  const [recipientName, setRecipientName] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");

  const handleShipping = (evt) => {
    const { name, value } = evt.target;
    setShippingAddress({ ...shippingAddress, [name]: value });
  };

  const handleBilling = (evt) => {
    const { name, value } = evt.target;
    setBillingAddress({ ...billingAddress, [name]: value });
  };

  const configCardElement = {
    iconStyle: "solid",
    style: {
      base: {
        fontSize: "16px",
      },
    },
    hidePostalCode: true,
  };

  const handleFormSubmit = async (evt) => {
    evt.preventDefault();
    const cardElement = elements.getElement("card");
    if (
      !shippingAddress.line1 ||
      !shippingAddress.city ||
      !shippingAddress.country ||
      !shippingAddress.postal_code ||
      !shippingAddress.state ||
      !billingAddress.line1 ||
      !billingAddress.city ||
      !billingAddress.country ||
      !billingAddress.postal_code ||
      !billingAddress.state
    ) {
      return;
    }
    apiInstance
      .post("/payments/create", {
        amount: total * 100,
        shipping: {
          name: recipientName,
          address: { ...shippingAddress },
        },
      })
      .then(({ data: clientSecret }) => {
        stripe
          .createPaymentMethod({
            type: "card",
            card: cardElement,
            billing_details: {
              name: nameOnCard,
              address: { ...billingAddress },
            },
          })
          .then(({ paymentMethod }) => {
            stripe
              .confirmCardPayment(clientSecret, {
                payment_method: paymentMethod.id,
              })
              .then(({ paymentIntent }) => {
                dispatch(clearCart());
              });
          });
      });
  };

  useEffect(() => {
    if (itemCount < 1) history.push("/");
  }, [itemCount]);

  return (
    <div className="paymentDetails">
      <form onSubmit={handleFormSubmit}>
        <div className="group">
          <h2>Shipping Address</h2>
          <Input
            required
            onChange={(evt) => setRecipientName(evt.target.value)}
            name="recipientName"
            type="text"
            placeholder="Recipient Name"
            value={recipientName}
          />
          <Input
            required
            onChange={(evt) => handleShipping(evt)}
            name="line1"
            type="text"
            placeholder="Line 1"
            value={shippingAddress.line1}
          />
          <Input
            onChange={(evt) => handleShipping(evt)}
            name="line2"
            type="text"
            placeholder="Line 2"
            value={shippingAddress.line2}
          />
          <Input
            required
            onChange={(evt) => handleShipping(evt)}
            name="city"
            type="text"
            placeholder="City"
            value={shippingAddress.city}
          />
          <Input
            required
            onChange={(evt) => handleShipping(evt)}
            name="state"
            type="text"
            placeholder="State"
            value={shippingAddress.state}
          />
          <Input
            required
            onChange={(evt) => handleShipping(evt)}
            name="postal_code"
            type="text"
            placeholder="Postalcode"
            value={shippingAddress.postal_code}
          />
          <div className="formRow checkoutInput">
            <CountryDropdown
              required
              onChange={(val) =>
                handleShipping({
                  target: {
                    name: "country",
                    value: val,
                  },
                })
              }
              value={shippingAddress.country}
              valueType="short"
            />
          </div>
        </div>
        <div className="group">
          <h2>Billing Address</h2>
          <Input
            required
            onChange={(evt) => setNameOnCard(evt.target.value)}
            name="nameOnCard"
            type="text"
            placeholder="Name on Card"
            value={nameOnCard}
          />
          <Input
            required
            onChange={(evt) => handleBilling(evt)}
            name="line1"
            type="text"
            placeholder="Line 1"
            value={billingAddress.line1}
          />
          <Input
            onChange={(evt) => handleBilling(evt)}
            name="line2"
            type="text"
            placeholder="Line 2"
            value={billingAddress.line2}
          />
          <Input
            required
            onChange={(evt) => handleBilling(evt)}
            name="city"
            type="text"
            placeholder="City"
            value={billingAddress.city}
          />
          <Input
            required
            onChange={(evt) => handleBilling(evt)}
            name="state"
            type="text"
            placeholder="State"
            value={billingAddress.state}
          />
          <Input
            required
            onChange={(evt) => handleBilling(evt)}
            name="postal_code"
            type="text"
            placeholder="Postalcode"
            value={billingAddress.postal_code}
          />
          <div className="formRow checkoutInput">
            <CountryDropdown
              required
              onChange={(val) =>
                handleBilling({
                  target: {
                    name: "country",
                    value: val,
                  },
                })
              }
              value={billingAddress.country}
              valueType="short"
            />
          </div>
        </div>
        <div className="group">
          <h2>Card Details</h2>
          <CardElement options={configCardElement} />
        </div>
        <Button type="submit">Pay Now</Button>
      </form>
    </div>
  );
}

export default PaymentDetails;
