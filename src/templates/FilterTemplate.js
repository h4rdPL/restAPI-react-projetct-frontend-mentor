import React from "react";
import styled from "styled-components";
import { ContinentSelect } from "../components/atoms/ContinentSelect";
import { Input } from "../components/atoms/Input";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  justify-content: space-between;
  padding: 2rem;
  @media (min-width: 1400px) {
    flex-direction: row;
  }
`;

export const FilterTemplate = () => {
  return (
    <Wrapper>
      <Input placeholder={"Search for a country"} />
      <ContinentSelect />
    </Wrapper>
  );
};
