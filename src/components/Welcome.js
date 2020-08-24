import React from "react";
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
  Box,
} from "@material-ui/core";

const WelcomeWrapper = styled.div``;

export default function Welcome() {
  return (
    <WelcomeWrapper>
      <Grid container>
        <Grid container item alignItems="stretch">
          <Grid item xs={12}>
            <Header></Header>
          </Grid>
        </Grid>
        <Grid container item alignItems="stretch">
          <Grid item xs={12}>
            <Accordion square style={{ background: "#f4e5f7" }}>
              <AccordionSummary style={{ height: "3rem" }}>
                <Box px={10} my={"auto"}>
                  <Typography variant="h4" component="h4" gutterBottom>
                    Sign In
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <SignIn></SignIn>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded square style={{ background: "#fcecff" }}>
              <AccordionSummary style={{ height: "3rem" }}>
                <Box px={10} my={"auto"}>
                  <Typography variant="h4" component="h4" gutterBottom>
                    Sign Up
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <SignUp></SignUp>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
      </Grid>
    </WelcomeWrapper>
  );
}
