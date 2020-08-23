import React, { useState } from "react";
import { connect } from "react-redux";
import { signInUser } from "../store/actions/authActions";
import {
  TextField,
  InputLabel,
  Button,
  Box,
  Typography,
} from "@material-ui/core";
import styled from "@emotion/styled";
import { Redirect } from "react-router-dom";

const SignInWrapper = styled.div`
  margin: 0 auto;
  background: #eee;
  text-align: center;
  height: 100vh;

  form {
    width: 300px;
    margin: 0 auto;
  }
`;

const SignIn = ({ signIn, signInError, auth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn({ email, password });
  };

  if (auth.uid) return <Redirect to="/" />;

  return (
    <SignInWrapper>
      <Typography variant="h4" component="h4" gutterBottom>
        Sign In
      </Typography>
      <p>{signInError}</p>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Box mx="auto">
          <Box>
            <Box m={5}>
              <InputLabel htmlFor="signin-email">Email</InputLabel>
              <TextField
                id="signin-email"
                mt={50}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Box>
            <Box m={5}>
              <InputLabel htmlFor="signin-password">Password</InputLabel>
              <TextField
                id="signin-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Box>
          </Box>
          <Box m={5}>
            <Button variant="contained" color="primary" type="submit">
              Sign In
            </Button>
          </Box>
        </Box>
      </form>
    </SignInWrapper>
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
