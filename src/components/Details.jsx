import React, { useState, useEffect } from "react";
import { FormGroup, makeStyles } from "@material-ui/core";
import { NavLink, useParams } from "react-router-dom";
import { dashboard } from "../service/api";
const useStyles = makeStyles({
  container: {
    width: "50%",
    margin: "5% 0 0 25%",
    "& > *": {
      marginTop: 20,
    },
  },
});

const Details = () => {
  const [user, setUser] = useState({
    name: "",
    total: "",
    inStock: "",
    cat: "",
    brand: "",
    details: "",
  });

  const classes = useStyles();
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await dashboard(id);
    setUser(res.data);
  };

  return (
    <FormGroup className={classes.container}>
      <NavLink className="btn btn-primary" to="/">
        back to Home
      </NavLink>
      <h1 className="display-4">Stock Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">
          <strong>name: </strong>
          {user.name}
        </li>
        <li className="list-group-item">
          <strong>Total Qty: </strong>
          {user.total}
        </li>
        <li className="list-group-item">
          <strong>In Stock: </strong>
          {user.inStock}
        </li>
        <li className="list-group-item">
          <strong>phone: </strong>
          {user.cat}
        </li>
        <li className="list-group-item">
          <strong>website: </strong>
          {user.brand}
        </li>
        <li className="list-group-item">
          <strong>website: </strong>
          {user.details}
        </li>
      </ul>
    </FormGroup>
  );
};

export default Details;
