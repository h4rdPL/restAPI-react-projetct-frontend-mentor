import React from "react";
import { DarkMode } from "./Toggle";
export default {
  title: "Example/molecules/Toggle",
  component: DarkMode,
};

function Primary() {
  return <DarkMode />;
}

export const Toggle = Primary.bind({});
