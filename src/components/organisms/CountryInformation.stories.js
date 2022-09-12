import {
  CountryWrapper,
  CountryImg,
  InformationContainer,
} from "./CountryInformation";
import { Paragraph } from "../atoms/Paragraph";
import { MainInformation } from "../atoms/NameElement";
import flag from "../../assets/poland.png";
import { Heading } from "../atoms/Heading";
export default {
  title: "Example/Organisms/Country Informations",
  component: CountryWrapper,
};

export const Detail = () => (
  <CountryWrapper>
    <CountryImg src={flag} alt="Heyyyy" />
    <InformationContainer>
      <Heading information>Poland</Heading>
      <Paragraph>
        <MainInformation>Population:</MainInformation> 81,91991 919
      </Paragraph>
      <Paragraph>
        <MainInformation> Region:</MainInformation> Europe
      </Paragraph>
      <Paragraph>
        <MainInformation>Capital:</MainInformation> Warsaw
      </Paragraph>
    </InformationContainer>
  </CountryWrapper>
);
