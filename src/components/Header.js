import React from "react";
import { connect } from "react-redux";
import { signOutUser } from "../store/actions/authActions";
import { Button, Grid, Box, Container } from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { purple } from "@material-ui/core/colors";

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
      backgroundColor: purple[500],
    },
  },
}))(Button);

const Header = ({ auth, signOut }) => {
  const classes = useStyles();

  const SignOutLink = () => {
    if (auth.uid) {
      return (
        <ColorButton
          variant="contained"
          color="primary"
          disableElevation
          className={classes.margin}
          onClick={signOut}
        >
          Sign Out
        </ColorButton>
      );
    } else {
      return <></>;
    }
  };

  return (
    <div style={{ padding: "1rem 0", boxShadow: "0px 0px 4px 1px #00000029", background: "#ffffff", zIndex: "99", position: "relative" }}>
      <Container maxWidth="md" style={{ color: "#212121" }}>
        <Grid container className="container" alignItems="center">
          <Grid item xs={6}>
            <a href="/" style={{ textDecoration: "none", color: "#212121", display: "inline-block" }}>
              <img src="logo.png" style={{ width: "200px" }} alt=""/>
            </a>
          </Grid>
          <Grid item xs={6} align={"right"}>
            <Box>
              <SignOutLink />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebaseAuth.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOutUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
