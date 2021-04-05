import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProductStart,
  setProduct,
} from "../../redux/Products/products.actions";
import "./styles.scss";
import Button from "../Forms/Button";

const mapState = ({ productsData }) => ({
  product: productsData["product"],
});

function ProductCard({}) {
  const dispatch = useDispatch();
  const { productID } = useParams();
  const { product } = useSelector(mapState);

  const { productName, productThumbnail, productPrice } = product;

  const configButtonAddToCart = {
    type: "button",
  };

  useEffect(() => {
    dispatch(fetchProductStart(productID));
    return () => {
      dispatch(setProduct({}));
    };
  }, []);

  return (
    <div className="productCard">
      <div className="hero">
        <img src={productThumbnail} alt={productName} />
      </div>
      <div className="productDetails">
        <ul>
          <li>
            <h1>{productName}</h1>
          </li>
          <li>
            <span>{productPrice} $</span>
          </li>
          <li>
            <div className="addToCart">
              <Button {...configButtonAddToCart}>Add to Cart</Button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProductCard;
