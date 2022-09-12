import styled from "styled-components";
import test from "../../assets/themeToggle.svg";

export const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 0.2rem;
  width: fit-content;
  cursor: pointer;
  @media (min-width: 768px) {
    grid-gap: 0.5rem;
  }
`;

export const Paragraph = styled.p`
  font-size: 0.7rem;
  font-weight: 600;
  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

export const ToggleIcon = styled.img`
  width: 20px;
  height: 20px;
`;

export const DarkMode = () => (
  <ToggleWrapper>
    <ToggleIcon src={test} />
    <Paragraph>Dark Mode</Paragraph>
  </ToggleWrapper>
);
