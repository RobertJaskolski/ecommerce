import React, { useEffect } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { setOrderDetails } from "../../redux/Orders/orders.actions";

const columns = [
  { id: "productThumbnail", lable: "" },
  { id: "productName", lable: "Name" },
  { id: "productPrice", lable: "Price" },
  { id: "quantity", lable: "Quantity" },
];

const styles = {
  fontSize: "16px",
  width: "10%",
};

const formatText = (columnName, columnValue) => {
  switch (columnName) {
    case "productPrice":
      return `${columnValue} $`;
    case "productThumbnail":
      return <img alt={columnName} src={columnValue} width={250} />;
    default:
      return columnValue;
  }
};

function OrderDetails({ order }) {
  const dispatch = useDispatch();
  const orderItems = order && order.orderItems;
  useEffect(() => {
    return () => {
      dispatch(setOrderDetails({}));
    };
  }, []);
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((column, pos) => {
              const { lable } = column;
              return (
                <TableCell style={styles} key={pos}>
                  {lable}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {Array.isArray(orderItems) &&
            orderItems.length > 0 &&
            orderItems.map((row, pos) => {
              return (
                <TableRow key={pos}>
                  {columns.map((column, pos) => {
                    const columnName = column.id;
                    const columnValue = row[columnName];
                    return (
                      <TableCell style={styles} key={pos}>
                        {formatText(columnName, columnValue)}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default OrderDetails;
