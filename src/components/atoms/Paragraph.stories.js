import React from "react";
import { Paragraph } from "./Paragraph";

export default {
  title: "Example/Atoms/Paragraph",
  component: Paragraph,
};

export const primary = () => <Paragraph>Americas</Paragraph>;
export const name = () => <Paragraph name>Population</Paragraph>;
