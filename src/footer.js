import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    display: "flex",
    height: "40vh",
    backgroundColor: "#40394a",
    color: "#fff",
    flexShrink: 0,
    justifyContent: "space-around"
  },
  text: {
    paddingTop: "16em"
  }
}));

export default function CardFooter() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <div className={classes.text}>Terms & Condition</div>
      <div className={classes.text}>Privacy policy</div>
      <div className={classes.text}>Help</div>
      <div className={classes.text}>Techsaman @020 | All Rights Reserved.</div>
    </footer>
  );
}
