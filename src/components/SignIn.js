import React, { useState } from "react";
import { connect } from "react-redux";
import { signInUser } from "../store/actions/authActions";
import {
  TextField,
  InputLabel,
  Button,
  Box,
  Typography
} from "@material-ui/core";
import styled from "@emotion/styled";
import { Redirect } from "react-router-dom";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';

const SignInWrapper = styled.div`
  margin: 0 auto;
  background: #f4e5f7;
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
    '&:hover': {
      backgroundColor: purple[600],
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
    <SignInWrapper>
      <Box pt={10}>
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
            <ColorButton variant="contained" disableElevation type="submit">
              Sign In
            </ColorButton>
          </Box>
        </Box>
      </form>
      </Box>
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
