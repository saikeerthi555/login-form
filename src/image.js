import React from "react";
import Login from "./login.js";
import Image from "./background-img.jpg";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${Image})`,
    backgroundReact: "no-repeat"
    // backgroundSize: "cover"
  }
}));

export default function CardImage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Login />
    </div>
  );
}
