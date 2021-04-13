import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from "@material-ui/core";
import moment from "moment";

const columns = [
  { id: "orderCreatedDate", lable: "Order Date" },
  { id: "documentID", lable: "Order ID" },
  { id: "orderTotal", lable: "Amount" },
];

const styles = {
  fontSize: "16px",
  cursor: "pointer",
  width: "10%",
};

const formatText = (columnName, columnValue) => {
  switch (columnName) {
    case "orderTotal":
      return `${columnValue} $`;
    case "orderCreatedDate":
      return moment(columnValue).format("DD/MM/YYYY");
    default:
      return columnValue;
  }
};

function OrderHistory({ orders }) {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((column, pos) => {
              const { label } = column;
              return (
                <TableCell style={styles} key={pos}>
                  {label}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {Array.isArray(orders) &&
            orders.length > 0 &&
            orders.map((row, pos) => {
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

export default OrderHistory;
