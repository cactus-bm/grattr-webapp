import React, { useState } from "react";
import { connect } from "react-redux";
import { signInUser } from "../store/actions/authActions";
import { TextField, InputLabel, Button, Box } from "@material-ui/core";
import { Redirect } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { purple } from "@material-ui/core/colors";

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[300]),
    fontSize: 13,
    fontWeight: 900,
    backgroundColor: purple[300],
    "&:hover": {
      backgroundColor: purple[500],
    },
  },
}))(Button);

const SignIn = ({ signIn, signInError, auth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn({ email, password });
  };

  if (auth.uid) return <Redirect to="/" />;

  return (
    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
      <p>{signInError}</p>
      <Box mx="auto">
        <Box>
          <InputLabel htmlFor="signin-email">Email</InputLabel>
          <TextField
            fullWidth
            id="signin-email"
            mt={50}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Box my={5}>
            <InputLabel htmlFor="signin-password">Password</InputLabel>
            <TextField
              fullWidth
              id="signin-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Box>
        </Box>
        <Box mt={5}>
          <ColorButton variant="contained" disableElevation type="submit">
            Sign In
          </ColorButton>
        </Box>
      </Box>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    signInError: state.auth.signInError,
    auth: state.firebaseAuth.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (credentials) => dispatch(signInUser(credentials)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
