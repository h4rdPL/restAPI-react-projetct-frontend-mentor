import React from "react";
import styled from "styled-components";
const Select = styled.select`
  width: 50%;
  background: white;
  color: gray;
  font-size: 14px;
  border: none;
  padding: 15px 20px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  background-color: ${({ theme }) => theme.lightTheme.veryLightGray};
  border-radius: 5px;
  option {
    background-color: ${({ theme }) => theme.lightTheme.veryLightGray};
  }
  @media (min-width: 1400px) {
    width: 20%;
  }
`;

export const ContinentSelect = () => (
  <Select>
    <option value="" hidden disabled selected>
      Filter by Region
    </option>
    <option value="1">Africa</option>
    <option value="3">America</option>
    <option value="2">Asia</option>
    <option value="4">Europe</option>
    <option value="4">Oceania</option>
    <option value="4">All</option>
  </Select>
);
