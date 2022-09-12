import styled from "styled-components";
import { Heading } from "../atoms/Heading";
import { DarkMode } from "../molecules/Toggle";
export const Navigation = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 2rem;
  box-shadow: 3px 2px 6px rgba(0, 0, 0, 0.1);
`;
export const Menu = () => (
  <Navigation>
    <Heading>Where in the world?</Heading>
    <DarkMode />
  </Navigation>
);
