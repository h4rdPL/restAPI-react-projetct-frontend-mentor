import React from "react";
import { ThemeProvider } from "styled-components";
import { Menu } from "../components/organisms/Navigation";
import { theme } from "../theme/Theme";
import GlobalStyle from "../theme/GlobalStyle";

export const MainTemplate = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Menu />
        {children}
      </ThemeProvider>
    </>
  );
};
