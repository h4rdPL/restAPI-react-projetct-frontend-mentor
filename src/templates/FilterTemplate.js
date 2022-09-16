import React from "react";
import styled from "styled-components";
import { Input } from "../components/atoms/Input";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: flex-start;
  justify-content: space-between;
  row-gap: 1rem;
  grid-column: 1/-1;
  grid-row: 1/2;
  width: 100%;
  @media (min-width: 1400px) {
    flex-direction: row;
  }
`;
const Select = styled.select`
  width: 50%;
  background: white;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  border: none;
  padding: 15px 20px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  background-color: ${({ theme }) => theme.background};
  border-radius: 5px;
  option {
    background-color: ${({ theme }) => theme.background};
  }
  @media (min-width: 1400px) {
    width: 20%;
  }
`;
export const FilterTemplate = ({ updateQuery, handleChange }) => {
  return (
    <>
      <Wrapper>
        <Input
          type={"search"}
          placeholder={"Search for a country"}
          onChange={updateQuery}
        />
        <Select onChange={handleChange}>
          <option value="" hidden disabled selected>
            Filter by Region
          </option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
          <option value="">All</option>
        </Select>
      </Wrapper>
    </>
  );
};
