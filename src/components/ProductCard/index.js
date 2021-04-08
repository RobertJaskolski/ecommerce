import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProductStart,
  setProduct,
} from "../../redux/Products/products.actions";
import "./styles.scss";
import Button from "../Forms/Button";
import { addProduct } from "../../redux/Cart/cart.actions";

const mapState = ({ productsData }) => ({
  product: productsData["product"],
});

function ProductCard({}) {
  const dispatch = useDispatch();
  const { productID } = useParams();
  const { product } = useSelector(mapState);
  const { productName, productThumbnail, productPrice, productDesc } = product;
  const handleAddToCart = (product) => {
    if (!product) return;
    dispatch(addProduct(product));
  };
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
              <Button
                {...configButtonAddToCart}
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </Button>
            </div>
          </li>
          <span dangerouslySetInnerHTML={{ __html: productDesc }} />
        </ul>
      </div>
    </div>
  );
}

export default ProductCard;
