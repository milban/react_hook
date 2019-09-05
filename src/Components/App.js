import React from "react";
import GlobalStyle from "./GlobalStyle";
import Router from "./Router";
import styled from "styled-components";

const H1 = styled.h1`
  font-size: 3rem;
  text-align: center;
`;

function App() {
  return (
    <div className="App">
      <H1>React Hooks practice</H1>
      <Router />
      <GlobalStyle />
    </div>
  );
}

export default App;
