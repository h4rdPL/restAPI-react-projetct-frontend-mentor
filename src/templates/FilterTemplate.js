import React from "react";
import styled from "styled-components";
import { ContinentSelect } from "../components/atoms/ContinentSelect";
import { Input } from "../components/atoms/Input";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  justify-content: space-between;
  grid-column: 1/-1;
  grid-row: 1/2;

  @media (min-width: 1400px) {
    flex-direction: row;
  }
`;

export const FilterTemplate = ({ filteredItems, updateQuery }) => {
  return (
    <Wrapper>
      <Input
        type={"search"}
        placeholder={"Search for a country"}
        onChange={updateQuery}
      />
      <ContinentSelect />
    </Wrapper>
  );
};
