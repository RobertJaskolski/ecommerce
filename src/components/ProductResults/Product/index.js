import React from "react";
import Button from "../../../components/Forms/Button";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProduct } from "../../../redux/Cart/cart.actions";

function Product(product) {
  const dispatch = useDispatch();
  const { productThumbnail, productName, productPrice, documentID } = product;
  const configAddToCartButton = {
    type: "button",
  };
  const handleAddToCart = (product) => {
    if (!product) return;
    dispatch(addProduct(product));
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
              <Button
                {...configAddToCartButton}
                onClick={() => handleAddToCart(product)}
              >
                Add to cart
              </Button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Product;
