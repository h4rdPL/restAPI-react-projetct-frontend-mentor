import React from "react";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { IconContext } from "react-icons";

import { Button } from "./Button";
export default {
  title: "Example/Atoms/Button",
  component: Button,
};

export const primary = () => (
  <IconContext.Provider value={{ style: { paddingRight: "10px" } }}>
    <Button>
      <HiOutlineArrowNarrowLeft /> Back
    </Button>
  </IconContext.Provider>
);
