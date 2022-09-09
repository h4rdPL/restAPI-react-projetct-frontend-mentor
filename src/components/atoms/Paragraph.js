import styled, { css } from "styled-components";

export const Paragraph = styled.p`
  font-size: 1rem;
  ${({ name }) =>
    name &&
    css`
      font-weight: bold;
    `}
`;
