import styled, { css } from "styled-components";

export const Heading = styled.h1`
  font-size: 1.2rem;
  font-weight: bold;
  ${({ big }) =>
    big &&
    css`
      font-size: 1.8rem;
    `}
  ${({ information }) =>
    information &&
    css`
      margin-bottom: 1rem;
    `}
`;
