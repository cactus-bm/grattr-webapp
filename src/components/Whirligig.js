import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";

export default function Whirligig() {
  return (
    <Grid
      style={{ height: "100vh" }}
      container
      alignItems="center"
      justify="center"
    >
      <CircularProgress />
    </Grid>
  );
}
