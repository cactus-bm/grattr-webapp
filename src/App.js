import React from "react";
import "./App.css";
import Home from "./components/Home";
import AwaitEmail from "./components/AwaitEmail";
import Welcome from "./components/Welcome";
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/apm";
import { connect } from "react-redux";

Sentry.init({
  dsn:
    "https://bd5626ed0a9b48dc93c814ff67233ad1@o384166.ingest.sentry.io/5400416",
  integrations: [new Integrations.Tracing()],
  tracesSampleRate: 1.0,
});

const App = ({ auth, manuallyVerifiedEmail }) => {
  if (auth.uid && (auth.emailVerified || auth.email === manuallyVerifiedEmail )) {
    return <Home></Home>;
  } else if (auth.uid) {
    return <AwaitEmail auth={auth}></AwaitEmail>;
  } else {
    return <Welcome></Welcome>;
  }
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebaseAuth.auth,
    manuallyVerifiedEmail: state.auth.verifiedEmailAddress
  };
};

export default connect(mapStateToProps)(App);
