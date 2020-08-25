import React, { useState } from "react";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Header from "./Header";
import styled from "@emotion/styled";
import {
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const WelcomeWrapper = styled.div`
  background: #fcecff
`;

const useStyles = makeStyles({
  signInAccordion: {
    borderBottom: "1px solid rgb(0 0 0 / 9%)",
    transition: "all 0.2s ease-in-out",
    background: "#eed9f3",
    "&:hover": {
      filter: "brightness(1.02)"
    }
  },
  signUpAccordion: {
    borderTop: "1px solid rgb(255 255 255 / 50%)",
    borderBottom: "1px solid rgb(0 0 0 / 9%)",
    transition: "all 0.2s ease-in-out",
    background: "#fcecff",
    "&:hover": {
      filter: "brightness(1.02)"
    },
  }
})

export default function Welcome() {
  const [signUpDisplayed, setSignUpDisplayed] = useState(true);
  const classes = useStyles();

  return (
    <WelcomeWrapper>
      <Grid container>
        <Grid container item alignItems="stretch">
          <Grid item xs={12}>
            <Header></Header>
          </Grid>
        </Grid>
        <Grid container item alignItems="stretch">
          <Grid item xs={12} style={{ height: `calc(100vh - 5rem)` }}>
            <Accordion
              expanded={!signUpDisplayed}
              square
              style={{ background: "#eed9f3", margin: 0 }}
              elevation={0}
            >
              <AccordionSummary
                onClick={() => setSignUpDisplayed(!signUpDisplayed)}
                className={classes.signInAccordion}
              >
                <Container maxWidth="md">
                  <Typography variant="h4" component="h4">
                    Sign In
                  </Typography>
                </Container>
              </AccordionSummary>
              <AccordionDetails style={{ paddingBottom: "3rem" }}>
                <Container maxWidth="md">
                  <SignIn></SignIn>
                </Container>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={signUpDisplayed}
              square
              style={{ background: "#fcecff", margin: 0 }}
              elevation={0}
            >
              <AccordionSummary
                onClick={() => setSignUpDisplayed(!signUpDisplayed)}
                className={classes.signUpAccordion}
              >
                <Container maxWidth="md">
                  <Typography variant="h4" component="h4">
                    Sign Up
                  </Typography>
                </Container>
              </AccordionSummary>
              <AccordionDetails style={{ paddingBottom: "3rem" }}>
                <Container maxWidth="md">
                  <SignUp></SignUp>
                </Container>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
      </Grid>
    </WelcomeWrapper>
  );
}
