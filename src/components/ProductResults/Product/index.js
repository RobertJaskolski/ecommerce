import React from "react";
import Button from "../../../components/Forms/Button";
import { Link } from "react-router-dom";

function Product({ productThumbnail, productName, productPrice, documentID }) {
  const configAddToCartButton = {
    type: "button",
  };
  if (
    !documentID ||
    !productThumbnail ||
    !productName ||
    typeof productPrice === "undefined"
  )
    return null;
  return (
    <div className="product">
      <div className="thumb">
        <Link to={`/product/${documentID}`}>
          <img src={productThumbnail} alt={productName} />
        </Link>
      </div>
      <div className="details">
        <ul>
          <li>
            <span className="name">
              <Link to={`/product/${documentID}`}>{productName}</Link>
            </span>
          </li>
          <li>
            <span className="price">{productPrice} $</span>
          </li>
          <li>
            <div className="addToCart">
              <Button {...configAddToCartButton}>Add to cart</Button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Product;
