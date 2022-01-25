import React from "react";
import styled from "styled-components";
import "./App.css";
import { UIComponent } from "./components/ui/InitialPage";

const StyledHeader = styled.header`
  display: flex;
  flex: 1;
  width: 100%;
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  justify-content: flex-start;
  font-size: calc(10px + 2vmin);
  color: white;

  @media (min-width: 580px) {
    padding-top: 0;
    justify-content: center;
  }
`;

function App() {
  return (
    <div className="App">
      <StyledHeader>
        <UIComponent />
      </StyledHeader>
    </div>
  );
}

export default App;
