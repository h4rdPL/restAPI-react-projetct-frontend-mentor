import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme/Theme";
import GlobalStyle from "../theme/GlobalStyle";
import { FilterTemplate } from "../templates/FilterTemplate";
import { GridTemplate } from "../templates/GridTemplate";
import { MainTemplate } from "../templates/MainTemplate";
export const HomePage = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <FilterTemplate />
          <GridTemplate />
        </MainTemplate>
      </ThemeProvider>
    </>
  );
};
