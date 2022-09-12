import styled from "styled-components";

export const CountryWrapper = styled.div`
  /* justify-self: center; */
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
  width: 100%;
`;
