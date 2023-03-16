import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RecoilRoot } from 'recoil';
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { darkTheme } from './theme';

const GlobalStyle = createGlobalStyle`
`
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <ThemeProvider theme={darkTheme}  >
        <GlobalStyle />
        <App />
      </ThemeProvider>

    </RecoilRoot>
  </React.StrictMode>
);
