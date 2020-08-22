import React from 'react';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom"
import styled from "@emotion/styled"
import Home from "./components/Home"
import Welcome from "./components/Welcome"
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/apm';

Sentry.init({
  dsn: "https://bd5626ed0a9b48dc93c814ff67233ad1@o384166.ingest.sentry.io/5400416",
  integrations: [
    new Integrations.Tracing(),
  ],
  tracesSampleRate: 1.0,
});

const AppWrapper = styled.div``;

function App() {
  return (
    <BrowserRouter>
      <AppWrapper>
        <Route exact path="/" component={Home} />
        <Route exact path="/welcome" component={Welcome} />    
      </AppWrapper>
    </BrowserRouter>
  );
}

export default App;
