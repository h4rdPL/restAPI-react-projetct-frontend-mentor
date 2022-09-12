import React from "react";
import styled from "styled-components";
import { Detail } from "../components/organisms/CountryInformation.stories";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 5rem;
  @media (min-width: 768px) {
    justify-content: space-between;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1200px) {
    justify-content: space-between;
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1400px) {
    justify-content: space-between;
    grid-template-columns: repeat(4, 1fr);
  }
  padding: 2rem;
`;
export const GridTemplate = () => {
  return (
    <Wrapper>
      <Detail />
      <Detail />
      <Detail />
      <Detail />
      <Detail />
      <Detail />
      <Detail />
    </Wrapper>
  );
};
