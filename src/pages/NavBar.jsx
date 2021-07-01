import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";

// LOCAL-STYLING
const useStyles = makeStyles((theme) => ({
  text: {
    color: "orange",
    flexGrow: 1,
  },

  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const NavBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" component="p" className={classes.text}>
            Stock Management
          </Typography>
          <div style={{ marginRight: "2rem", color: "white" }}>
            <Button
              style={{
                borderRadius: 10,
                color: "white",
                padding: "15px ",
                fontSize: "15px",
                textTransform: "capitalize",
              }}
              variant="text"
              component={NavLink}
              to="/"
              color="default"
            >
              Dashboard
            </Button>

            <Button
              style={{
                borderRadius: 10,
                color: "white",
                padding: "15px ",
                fontSize: "15px",
                textTransform: "capitalize",
              }}
              variant="text"
              component={NavLink}
              to="/add"
              color="default"
            >
              Add-Stock
            </Button>
            <Button
              style={{
                borderRadius: 10,
                color: "#ffd662ff",
                padding: "15px ",
                fontSize: "15px",
              }}
              variant="text"
              component={NavLink}
              to="/login"
            >
              Log-in
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
