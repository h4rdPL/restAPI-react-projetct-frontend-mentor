import React from "react";
import { ToggleWrapper, ToggleIcon, Paragraph } from "./Toggle";
import test from "../../assets/themeToggle.svg";
export default {
  title: "Example/molecules/toggle",
  component: ToggleWrapper,
};

export const darkMode = () => (
  <ToggleWrapper>
    <ToggleIcon src={test} />
    <Paragraph>Dark Mode</Paragraph>
  </ToggleWrapper>
);
