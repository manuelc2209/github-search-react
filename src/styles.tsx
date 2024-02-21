import styled, { createGlobalStyle } from 'styled-components';

export const StyledHeader = styled.header`
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
    color: #ffffff;

    @media (max-width: 580px) {
        box-sizing: border-box;
        padding: 20px;
        justify-content: center;
    }
`;

export const StyledContainer = styled.div`
    text-align: center;
`;

export const GlobalStyle = createGlobalStyle`
html {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
}

html, body {
  height: 100vh;
}

#root {
  background-color: #232324;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: rgb(255, 255, 255);
}

body {
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html,
body,
* {
  font-family: monospace;
}

`;
