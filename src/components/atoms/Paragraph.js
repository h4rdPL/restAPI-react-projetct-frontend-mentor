import styled, { css } from "styled-components";

export const Paragraph = styled.p`
  font-size: 1rem;
  ${({ name }) =>
    name &&
    css`
      font-weight: bold;
    `}
  ${({ borderCountries }) =>
    borderCountries &&
    css`
      padding: 0.5rem 1rem;
      /* border: 1px solid #000; */
      box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      &:hover {
        opacity: 0.8;
      }
    `}
`;
