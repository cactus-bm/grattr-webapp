import React from "react";
import Header from "./Header";
import { Typography, Grid } from "@material-ui/core";

export default function AwaitEmail({ email }) {
  return (
    <div>
      <Header></Header>
      <Grid container>
        <Typography variant="h6" component="h6">
          We have sent an email to {email}. Please click the link to confirm
          your email address. Please reload this page if you have clicked the
          link and it has not updated.
        </Typography>
      </Grid>
    </div>
  );
}
