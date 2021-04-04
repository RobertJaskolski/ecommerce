import React from "react";
import "./styles.scss";
import Button from "../Forms/Button";

function LoadMore({ onLoadMoreEvt = () => {} }) {
  return <Button onClick={() => onLoadMoreEvt()}>Load More</Button>;
}

export default LoadMore;
