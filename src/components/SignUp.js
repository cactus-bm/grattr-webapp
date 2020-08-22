import React, { useState } from 'react'
import styled from "@emotion/styled"
import { connect } from "react-redux"
import { signUpUser } from "../store/actions/authActions"
import { TextField, InputLabel, Button, Box } from "@material-ui/core";
import { Redirect } from "react-router-dom";

const SignUpWrapper = styled.div`
    margin: 0 auto;
    background: #eee;
    text-align: center;
    height: 100vh;

    form {
        width: 300px;
        margin: 0 auto;
    }
`;

const SignUp = ({ signUp, signUpError, redirect }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const confirmPasswordsMatch = () => {
      return password === confirmPassword;
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      if (confirmPasswordsMatch) {
        signUp({email, password});
      }
    }
    
    if (redirect) return <Redirect to="/email-sent" />;
    return (
        <SignUpWrapper>
        <h1>Sign Up</h1>
        <p>{signUpError}</p>
        <form noValidate autoComplete="off" onSubmit={handleSubmit} >
            <Box mx="auto">
                <Box>
                    <Box m={5}>
                        <InputLabel htmlFor="signup-username">Username</InputLabel>
                        <TextField id="signup-username" mt={50} value={email} onChange={e => setEmail(e.target.value)} />
                    </Box>
                    <Box m={5}>
                        <InputLabel htmlFor="signup-password">Password</InputLabel>
                        <TextField id="signup-password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    </Box>
                    <Box m={5}>
                        <InputLabel htmlFor="signup-password-2">Confirm Password</InputLabel>
                        <TextField id="signup-password-2" type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} error={!confirmPasswordsMatch()}/>
                    </Box>
                </Box>
                <Box m={5}>
                    <Button variant="contained" color="primary" type="submit">Sign Up</Button>
                </Box>
            </Box>
        </form>
        </SignUpWrapper>
    )
}

const mapStateToProps = (state) => {
    return {
        signUpError: state.auth.signUpError,
        redirect: state.auth.redirectToEmail
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (credentials) => dispatch(signUpUser(credentials))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);