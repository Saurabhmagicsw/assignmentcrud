import React, { useEffect, useState } from "react";
import { dashboard, deleteUser } from "../service/api";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import Button from "@material-ui/core/Button";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { NavLink } from "react-router-dom";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 0,
  },
});

const Dashboard = () => {
  const [data, setData] = useState([]);
  const classes = useStyles();
  useEffect(() => {
    dashboardData();
    console.log("useeffectdsa");
  }, []);

  const deleteUserData = async (id) => {
    await deleteUser(id);
    dashboardData();
  };

  const dashboardData = async () => {
    const responce = await dashboard();
    console.log(responce.data);
    setData(responce.data);
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Id</StyledTableCell>
            <StyledTableCell>Item Name</StyledTableCell>
            <StyledTableCell>Item Name</StyledTableCell>
            <StyledTableCell>Stock</StyledTableCell>
            <StyledTableCell>In Stock</StyledTableCell>
            <StyledTableCell>Type</StyledTableCell>
            <StyledTableCell style={{ textAlign: "center" }}>
              Actions
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => (
            <StyledTableRow key={index + 1}>
              <StyledTableCell> {index + 1}</StyledTableCell>
              <StyledTableCell>{item.name}</StyledTableCell>
              <StyledTableCell>{item.total}</StyledTableCell>
              <StyledTableCell>{item.inStock}</StyledTableCell>
              <StyledTableCell>{item.cat}</StyledTableCell>
              <StyledTableCell>{item.brand}</StyledTableCell>
              <StyledTableCell style={{ textAlign: "center" }}>
                <Button
                  color="primary"
                  variant="contained"
                  style={{ margin: 5 }}
                  component={NavLink}
                  to={`/edit/${item.id}`}
                >
                  Edit
                </Button>
                <Button
                  color="primary"
                  variant="contained"
                  style={{ margin: 5 }}
                  component={NavLink}
                  to={`/edit/${item.id}`}
                >
                  Details
                </Button>
                <Button
                  style={{ margin: 5 }}
                  color="secondary"
                  variant="contained"
                  onClick={() => deleteUserData(item.id)}
                >
                  Delete
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Dashboard;
