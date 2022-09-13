import styled from "styled-components";

export const CountryWrapper = styled.div`
  position: relative;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`;
export const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 0.75rem;
  padding: 1.5rem 2rem;
`;
export const CountryImg = styled.img`
  max-width: 100%;
`;

export const Spinner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
