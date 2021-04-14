import React from "react";
import ShopMen from "./../../assets/shopMens.jpg";
import ShopWomen from "./../../assets/shopWomens.jpg";
import "./styles.scss";
import { useHistory } from "react-router-dom";

function Directory(props) {
  const history = useHistory();
  return (
    <div className="directory">
      <div className="wrap">
        <div
          className="item"
          style={{
            backgroundImage: `url(${ShopWomen})`,
          }}
        >
          <a onClick={() => history.push("/search/womens")}>Shop Womens</a>
        </div>
        <div
          className="item"
          style={{
            backgroundImage: `url(${ShopMen})`,
          }}
        >
          <a onClick={() => history.push("/search/mens")}>Shop Mens</a>
        </div>
      </div>
    </div>
  );
}

export default Directory;
