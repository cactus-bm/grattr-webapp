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

const WelcomeWrapper = styled.div``;

export default function Welcome() {
  const [signUpDisplayed, setSignUpDisplayed] = useState(true);

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
              style={{ background: "#f4e5f7", margin: 0 }}
            >
              <AccordionSummary
                onClick={() => setSignUpDisplayed(!signUpDisplayed)}
              >
                <Container maxWidth="md">
                  <Typography variant="h4" component="h4" gutterBottom>
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
            >
              <AccordionSummary
                onClick={() => setSignUpDisplayed(!signUpDisplayed)}
              >
                <Container maxWidth="md">
                  <Typography variant="h4" component="h4" gutterBottom>
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
