import { useState, useEffect } from "react";
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button,
  makeStyles,
  Typography,
  TextareaAutosize,
} from "@material-ui/core";
import { dashboard, editUser } from "../service/api";
import { useHistory, useParams, NavLink } from "react-router-dom";

const initialValue = {
  name: "",
  total: "",
  inStock: "",
  cat: "",
  brand: "",
  details: "",
};

const useStyles = makeStyles({
  container: {
    width: "50%",
    margin: "5% 0 0 25%",
    "& > *": {
      marginTop: 20,
    },
  },
});

const Edit = () => {
  const [user, setUser] = useState(initialValue);
  const { name, total, inStock, cat, brand, details } = user;
  const { id } = useParams();
  const classes = useStyles();
  let history = useHistory();

  useEffect(() => {
    loadUserDetails();
    console.log("useeffect");
  }, []);

  const loadUserDetails = async () => {
    const response = await dashboard(id);
    setUser(response.data);
  };

  const editUserDetails = async () => {
    await editUser(id, user);
    history.push("/");
  };

  const onValueChange = (e) => {
    console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <FormGroup className={classes.container}>
      <NavLink className="btn btn-primary" to="/">
        back to Home
      </NavLink>
      <Typography variant="h4">Edit Stock</Typography>
      <FormControl>
        <InputLabel htmlFor="my-input1">Name</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="name"
          value={name}
          id="my-input1"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input11">Total Quantity</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="total"
          value={total}
          id="my-input11"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input111">In Stock</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="inStock"
          value={inStock}
          id="my-input111"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input1111">Cat</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="cat"
          value={cat}
          id="my-input1111"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input11111">Brand</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="brand"
          value={brand}
          id="my-input11111"
        />
      </FormControl>
      <FormControl>
        <TextareaAutosize
          rowsMin={3}
          onChange={(e) => onValueChange(e)}
          name="details"
          value={details}
          id="my-input111111"
        />
      </FormControl>
      <FormControl>
        <Button
          variant="contained"
          color="primary"
          onClick={() => editUserDetails()}
        >
          Edit Stock
        </Button>
        <hr />
      </FormControl>
    </FormGroup>
  );
};

export default Edit;
