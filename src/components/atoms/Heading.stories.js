import React from "react";
import { Heading } from "./Heading";

export default {
  title: "Example/Atoms/Heading",
  component: Heading,
};

export const MainHeader = () => <Heading big>Where in the world?</Heading>;
export const CountryHeading = () => <Heading detailsHeader>Germany</Heading>;
