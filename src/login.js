import React from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
    justifyContent: "center",
    alighnItems: "center",
    height: "50vh"
  },
  root: {
    width: 380,
    height: 350,
    marginTop: "80px",
    padding: "30px",
    background: "#fff",
    boxShadow: "0 2px 2px 2px #e1e5ea"
  },
  form: {
    height: "100%",
    width: "100%" // Fix IE 11 issue.
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    padding: "10px",
    backgroundColor: "#e40017"
  }
}));

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <Card className={classes.root} align="center">
        <Container component="main">
          <div className={classes.paper}>
            <Typography component="h1" variant="h5">
              Welcome!
            </Typography>
            <form className={classes.form} noValidate>
              <TextField
                variant="standard"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email id"
                name="email"
                autoComplete="email"
                autoFocus
                className={classes.email}
              />
              <TextField
                variant="standard"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Enter Password"
                type="password"
                id="password"
                autoComplete="current-password"
                className={classes.password}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                className={classes.submit}
              >
                Login
              </Button>
            </form>
          </div>
        </Container>
      </Card>
    </div>
  );
}
