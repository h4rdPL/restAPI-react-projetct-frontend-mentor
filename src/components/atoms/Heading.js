import styled, { css } from "styled-components";

export const Heading = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  ${({ big }) =>
    big &&
    css`
      font-size: 2rem;
    `}
`;
