import React from "react";
import {
  removeCartItem,
  addProduct,
  reduceCartItem,
} from "../../../redux/Cart/cart.actions";
import { useDispatch } from "react-redux";

function Item(product) {
  const dispatch = useDispatch();
  const {
    productName,
    productThumbnail,
    productPrice,
    documentID,
    quantity,
  } = product;

  const handleRemoveCartItem = (documentID) => {
    dispatch(removeCartItem({ documentID }));
  };

  const handleAddProduct = (product) => {
    dispatch(addProduct(product));
  };

  const handleReduceCartItem = (product) => {
    dispatch(reduceCartItem(product));
  };

  return (
    <table className="cartItem" border="0" cellPadding="10" cellSpacing="0">
      <tbody>
        <tr>
          <td>
            <img alt={productName} src={productThumbnail} />
          </td>
          <td>{productName}</td>
          <td>
            <span
              className="cartBtn"
              onClick={() => {
                handleReduceCartItem(product);
              }}
            >
              {"< "}
            </span>
            <span>{quantity}</span>
            <span className="cartBtn" onClick={() => handleAddProduct(product)}>
              {" >"}
            </span>
          </td>
          <td>{productPrice} $</td>
          <td align="center">
            <span
              className="cartBtn"
              onClick={() => handleRemoveCartItem(documentID)}
            >
              X
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
export default Item;
