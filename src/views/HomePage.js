import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme/Theme";
import GlobalStyle from "../theme/GlobalStyle";
import { GridTemplate } from "../templates/GridTemplate";
import { MainTemplate } from "../templates/MainTemplate";
export const HomePage = ({ value }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <GridTemplate />
        </MainTemplate>
      </ThemeProvider>
    </>
  );
};
