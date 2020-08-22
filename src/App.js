import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from "@emotion/styled"
import SideBar from "./components/SideBar"
import Header from "./components/Header"
import Dashboard from "./components/Dashboard"

const AppWrapper = styled.div``;

function App() {
  return (
    <AppWrapper>

      <Header></Header>
      <SideBar></SideBar>
      <Dashboard></Dashboard>      
    </AppWrapper>
  );
}

export default App;
