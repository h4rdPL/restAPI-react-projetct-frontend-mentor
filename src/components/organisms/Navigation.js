import { Link } from "react-router-dom";
import styled from "styled-components";
import { Heading } from "../atoms/Heading";
import { DarkMode } from "../molecules/Toggle";
export const Navigation = styled.nav`
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 2rem;
  box-shadow: 3px 2px 6px rgba(0, 0, 0, 0.1);
  color: ${({ theme }) => theme.text};
  @media (min-width: 1400px) {
    padding: 1.5rem 4rem;
  }
`;

export const Menu = () => (
  <Navigation>
    <Heading as={Link} to="/">
      Where in the world?
    </Heading>
    <DarkMode />
  </Navigation>
);
