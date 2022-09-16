import React from "react";
import GlobalStyle from "../theme/GlobalStyle";
import { GridTemplate } from "../templates/GridTemplate";
import { MainTemplate } from "../templates/MainTemplate";

export const HomePage = () => {
  return (
    <>
      <MainTemplate>
        <GlobalStyle />
        <GridTemplate />
      </MainTemplate>
    </>
  );
};
