import styled from "styled-components";
import search from "../../assets/search-outline.svg";

export const Input = styled.input`
  width: 100%;
  padding: 15px 20px 15px 40px;
  background-image: url(${search});
  background-size: 20px;
  background-position: 10px 50%;
  background-repeat: no-repeat;
  border-radius: 5px;
  border: none;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  @media (min-width: 1400px) {
    width: 30%;
  }
`;
