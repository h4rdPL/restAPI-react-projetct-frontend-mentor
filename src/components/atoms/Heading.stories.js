import React from "react";
import { Heading } from "./Heading";

export default {
  title: "Example/Atoms/Heading",
  component: Heading,
};

export const Logo = () => <Heading>Where in the world?</Heading>;
export const CountryDetailHeading = () => <Heading>Belgium</Heading>;
export const CountryHeading = () => <Heading>Belgium</Heading>;
