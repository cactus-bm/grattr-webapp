import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { checkEmailVerifiedUser } from "../store/actions/authActions";
import { Typography, Container, Box, Button } from "@material-ui/core";
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

const AwaitEmail = ({ auth, checkEmailVerified }) => {
  return (
    <div>
      <Header></Header>
      <Container maxWidth="md">
        <Typography variant="h6" component="h6">
          <Box pt={10} mb={4}>
            We have sent an email to {auth.email}. Please click the link to confirm
            your email address. If you have clicked the link and this page has not updated, please road the page.
          </Box>
          <Box>
            <ColorButton
              variant="contained"
              color="primary"
              disableElevation
              onClick={checkEmailVerified}
            >
              Reload
            </ColorButton>
          </Box>
        </Typography>
      </Container>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    checkEmailVerified: () => dispatch(checkEmailVerifiedUser()),
  };
};

export default connect(null, mapDispatchToProps)(AwaitEmail);
