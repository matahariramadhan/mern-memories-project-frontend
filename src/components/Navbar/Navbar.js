import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Avatar, Button, Toolbar, Typography } from "@material-ui/core";

import memories from "../../images/memories.png";

import useStyles from "./styles";

const Navbar = () => {
  const classes = useStyles();

  const user = null;

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography
          component={Link}
          to="/"
          className={classes.heading}
          variant="h2"
          align="center"
        >
          Memories
        </Typography>
        <img
          className={classes.image}
          src={memories}
          alt="memories"
          height="60"
        />
      </div>
      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.purple}
              alt={user.result.name}
              src={user.result.imageURL}
            >
              {user.result.name.charAt(0)}
            </Avatar>
            <Typography className={classes.userName}>
              {user.result.name}
            </Typography>
            <Button variant="contained" color="secondary" onClick={() => {}}>
              Signout
            </Button>
          </div>
        ) : (
          <Button
            component={Link}
            to="/auth"
            color="secondary"
            variant="contained"
          >
            Signin
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
