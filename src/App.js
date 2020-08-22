import React from 'react';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom"
import styled from "@emotion/styled"
import Home from "./components/Home"
import Welcome from "./components/Welcome"

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
