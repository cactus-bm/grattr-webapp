import React, { useState } from "react";
import styled from "@emotion/styled";
import { connect } from "react-redux";
import { signUpUser } from "../store/actions/authActions";
import {
  TextField,
  InputLabel,
  Button,
  Box,
  Typography,
} from "@material-ui/core";
import { Redirect } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { purple } from "@material-ui/core/colors";

const SignUpWrapper = styled.div``;

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[300]),
    fontSize: 13,
    fontWeight: 900,
    backgroundColor: purple[300],
    "&:hover": {
      backgroundColor: purple[600],
    },
  },
}))(Button);

const SignUp = ({ signUp, signUpError, redirect }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const confirmPasswordsMatch = () => {
    return password === confirmPassword;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (confirmPasswordsMatch) {
      signUp({ email, password });
    }
  };

  if (redirect) return <Redirect to="/email-sent" />;
  return (
    <SignUpWrapper>
      <p>{signUpError}</p>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Box mx="auto">
          <Box>
            <Box my={5}>
              <InputLabel htmlFor="signup-email">Email</InputLabel>
              <TextField
                id="signup-email"
                mt={50}
                value={email}
                fullWidth
                onChange={(e) => setEmail(e.target.value)}
              />
            </Box>
            <Box my={5}>
              <InputLabel htmlFor="signup-password">Password</InputLabel>
              <TextField
                id="signup-password"
                type="password"
                value={password}
                fullWidth
                onChange={(e) => setPassword(e.target.value)}
              />
            </Box>
            <Box my={5}>
              <InputLabel htmlFor="signup-password-2">
                Confirm Password
              </InputLabel>
              <TextField
                id="signup-password-2"
                type="password"
                value={confirmPassword}
                fullWidth
                onChange={(e) => setConfirmPassword(e.target.value)}
                error={!confirmPasswordsMatch()}
              />
            </Box>
          </Box>
          <Box>
            <ColorButton variant="contained" disableElevation type="submit">
              Sign Up
            </ColorButton>
          </Box>
        </Box>
      </form>
    </SignUpWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    signUpError: state.auth.signUpError,
    redirect: state.auth.redirectToEmail,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (credentials) => dispatch(signUpUser(credentials)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
