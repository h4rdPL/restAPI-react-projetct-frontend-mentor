import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Menu } from "../components/organisms/Navigation";
import { darkTheme, lightTheme } from "../theme/Theme";
import GlobalStyle from "../theme/GlobalStyle";

export const MainTemplate = ({ children }) => {
  const [dark, setDark] = useState("dark");

  const themeToggle = (event) => {
    dark === "dark" ? setDark("light") : setDark("dark");
    console.log(event);
  };

  return (
    <>
      <ThemeProvider theme={dark === "dark" ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Menu themeToggle={themeToggle} dark={dark} />
        {children}
      </ThemeProvider>
    </>
  );
};
