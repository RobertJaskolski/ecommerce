import React from "react";
import Button from "../Forms/Button";

function LoadMore({ onLoadMoreEvt = () => {} }) {
  return <Button onClick={() => onLoadMoreEvt()}>Load More</Button>;
}

export default LoadMore;
