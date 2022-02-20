import React from "react";
import styled from "styled-components";
import "./App.css";
import { UIComponent } from "./components/ui/InitialPage";

const StyledHeader = styled.header`
  display: flex;
  flex: 1;
  width: 100%;
  background-color: #232324;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  justify-content: flex-start;
  font-size: calc(10px + 2vmin);
  color: orange;

  @media (max-width: 580px) {
    box-sizing: border-box;
    padding: 20px 20px 20px 20px;
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
