import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../theme/Theme";
import GlobalStyle from "../theme/GlobalStyle";
import { GridTemplate } from "../templates/GridTemplate";
import { MainTemplate } from "../templates/MainTemplate";

export const HomePage = () => {
  const [dark, setDark] = useState("light");

  const themeToggle = () => {
    dark === "dark" ? setDark("light") : setDark("dark");
  };

  return (
    <>
      <ThemeProvider theme={dark === "dark" ? darkTheme : lightTheme}>
        <GlobalStyle />
        <button onClick={themeToggle}>Zmień</button>
        <MainTemplate>
          <GridTemplate />
        </MainTemplate>
      </ThemeProvider>
    </>
  );
};
