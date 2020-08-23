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
  Grid,
} from "@material-ui/core";
import { Redirect } from "react-router-dom";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { purple } from "@material-ui/core/colors";

const SignUpWrapper = styled.div`
  margin: 0 auto;
  background: #fcecff;
  text-align: center;
  height: 100vh;

  form {
    width: 300px;
    margin: 0 auto;
  }
`;

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

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
      <Box pt={10}>
        <Typography variant="h4" component="h4" gutterBottom>
          Sign Up
        </Typography>
        <p>{signUpError}</p>
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <Box mx="auto">
            <Box>
              <Box m={5}>
                <InputLabel htmlFor="signup-email">Email</InputLabel>
                <TextField
                  id="signup-email"
                  mt={50}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Box>
              <Box m={5}>
                <InputLabel htmlFor="signup-password">Password</InputLabel>
                <TextField
                  id="signup-password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Box>
              <Box m={5}>
                <InputLabel htmlFor="signup-password-2">
                  Confirm Password
                </InputLabel>
                <TextField
                  id="signup-password-2"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  error={!confirmPasswordsMatch()}
                />
              </Box>
            </Box>
            <Box m={5}>
              <ColorButton variant="contained" disableElevation type="submit">
                Sign Up
              </ColorButton>
            </Box>
          </Box>
        </form>
      </Box>
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
