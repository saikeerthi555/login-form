import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 380,
    height: 280,
    padding: "30px",
    margin: "100px",
    background: "#fff",
    boxShadow: "0 3px 5px 2px #e1e5ea"
  },
  form: {
    width: "100%" // Fix IE 11 issue.
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    padding: "10px",
    backgroundColor: "#e40017"
  },
  password: {
    backgroundColor: "#f3f4ed"
  }
}));

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root} align="center">
      <Container component="main" maxWidth="xs">
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
              variant="filled"
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
  );
}
