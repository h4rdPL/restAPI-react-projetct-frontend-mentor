// import styled from "styled-components";
import React from "react";
import Select from "react-select";
const options = [
  { value: "Africa", label: "Africa" },
  { value: "America", label: "America" },
  { value: "Asia", label: "Asia" },
  { value: "Europe", label: "Europe" },
  { value: "Oceania", label: "Oceania" },
];

export const ContinentSelect = () => (
  <Select placeholder={"Filter by Region"} options={options} />
);
