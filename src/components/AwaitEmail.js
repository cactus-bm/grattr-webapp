import React from "react";
import Header from "./Header";
import { Typography, Container, Box } from "@material-ui/core";

export default function AwaitEmail({ email }) {
  return (
    <div>
      <Header></Header>
      <Container maxWidth="md">
        <Typography variant="h6" component="h6">
          <Box py={10}>
            We have sent an email to {email}. Please click the link to confirm
            your email address. Please reload this page if you have clicked the
            link and it has not updated.
          </Box>
        </Typography>
      </Container>
    </div>
  );
}
