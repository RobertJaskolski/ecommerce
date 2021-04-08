import React from "react";
import "./styles.scss";
function Item(product) {
  const {
    productName,
    productThumbnail,
    productPrice,
    documentID,
    quantity,
  } = product;
  return (
    <table className="cartItem" border="0" cellPadding="10" cellSpacing="0">
      <tbody>
        <tr>
          <td>
            <img alt={productName} src={productThumbnail} />
          </td>
          <td>{productName}</td>
          <td>
            <span>{quantity}</span>
          </td>
          <td>{productPrice} $</td>
          <td align="center">
            <span>X</span>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
export default Item;
