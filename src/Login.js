import React, { useState, useEffect } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { TextField, Button, Card, Input, Divider } from "@material-ui/core";

import { Link } from "react-router-dom";

const BootstrapButton = withStyles({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "none",
    textTransform: "none",
    fontSize: 16,
    margin: "1rem auto",
    padding: "6px 12px",
    border: "1px solid",
    lineHeight: 1.5,
    backgroundColor: "#0063cc",
    borderColor: "#0063cc",
    color: "white",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
      backgroundColor: "#0069d9",
      borderColor: "#0062cc",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#0062cc",
      borderColor: "#005cbf",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
    },
  },
})(Button);
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "columnn",
    marginLeft: "auto",
    marginRight: "auto",
    justifyContent: "center",
    textAlign: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: "100%",
    },
  },
  signinbtn: {
    width: "100%",
    marginTop: "1ch",
    color: "white",
    fontWeight: "600",
    backgroundColor: "#7bc043",
  },
  signindiv: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    marginLeft: "auto",
    marginRight: "auto",
    minWidth: "auto",
    maxWidth: "300px",
  },
  signincard: {
    width: "100%",
    paddingTop: "1",
    paddingBottom: "1ch",
    flexDirection: "column",
  },
  divbtn: {
    width: "100%",
    marginTop: "1ch",
    color: "white",
    fontWeight: "600",
    backgroundColor: "#0392cf",
    height: "2.1rem",
    borderRadius: "0.2rem",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "0.7rem",
    "&:hover": {
      backgroundColor: "#7bc043",
    },
    "&:focus": {},
  },
  divider: {
    margin: theme.spacing(3),
  },
}));

const Login = ({ history, setLogin }) => {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [open, setOpen] = React.useState(false);
  const [userIn, setUserIn] = useState(false);

  useEffect(() => {}, [userIn]);

  const handleClick = async (e) => {
    e.preventDefault();

    if (true) {
      return;
    }
    // if (isLogin) {
    //   return;
    // }
    // else {
    setUserIn(true);
  };

  const fectLogin = async () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        console.log("successfully login");

        const myemail = user.user.email;

        const profile = [];

        localStorage.clear();

        const ref = firebase
          .firestore()
          .collection("userprofile")
          .onSnapshot((query) => {
            query.forEach((doc) => {
              if (myemail === doc.data().email) {
                localStorage.setItem("uid", JSON.stringify(doc.id));
                const { name, url, email, coverurl } = doc.data();
                const currentuser = {
                  name: name,
                  email: email,
                  url: url,
                  isLogin: true,
                  id: doc.id,
                  coverurl,
                };
                localStorage.setItem(
                  "currentuser",
                  JSON.stringify(currentuser)
                );
              }
            });
            return () => ref;
          });

        setEmail("");
        setPassword("");
        // history.push('/webchat');
      })
      .catch((error) => {
        //end auth
      });
    setLogin(true);

    // }
  };

  return (
    <div className={classes.signindiv}>
      <h1>Log In </h1>
      <Card className={classes.signincard}>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            variant="outlined"
            size="small"
            type="email"
          />

          <TextField
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            variant="outlined"
            size="small"
            type="password"
          />

          <Button
            onClick={handleClick}
            className={classes.signinbtn}
            color="primary"
            variant="contained"
            size="large"
          >
            Sign In
          </Button>
        </form>
        <Divider className={classes.divider} />
        <BootstrapButton onClick={() => setOpen(true)}>
          Create New Account
        </BootstrapButton>
      </Card>
    </div>
  );
};

export default Login;
