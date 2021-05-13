import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FormHelperText } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {},
  footer: {
    display: "flex",
    height: 300,
    backgroundColor: "#40394a",
    color: "#fff"
  }
}));

export default function CardFooter() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <div>Terms & Condition</div>
      <div>Privacy policy</div>
      <div>Help</div>
    </footer>
  );
}
