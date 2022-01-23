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
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
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
