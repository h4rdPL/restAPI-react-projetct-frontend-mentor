import {
  CountryWrapper,
  CountryImg,
  InformationContainer,
} from "./CountryInformation";
import { Paragraph } from "../atoms/Paragraph";
import { MainInformation } from "../atoms/NameElement";
import { Heading } from "../atoms/Heading";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
export default {
  title: "Example/Organisms/Country Informations",
  component: CountryWrapper,
};
export const Detail = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const URL = `https://restcountries.com/v2/all`;
      try {
        const resp = await axios.get(URL);

        setData(resp.data);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);
  const { params } = useParams();
  console.log(params);
  console.log(data);
  return (
    <>
      {data.map(({ name, population, flags, region, capital, alpha3Code }) => (
        <CountryWrapper as={Link} to={alpha3Code}>
          <CountryImg src={flags.svg} alt="Heyyyy" />
          <InformationContainer>
            <Heading information>{name}</Heading>
            <Paragraph>
              <MainInformation>Population:</MainInformation> {population}
            </Paragraph>
            <Paragraph>
              <MainInformation> Region:</MainInformation> {region}
            </Paragraph>
            <Paragraph>
              <MainInformation>Capital:</MainInformation> {capital}
            </Paragraph>
          </InformationContainer>
        </CountryWrapper>
      ))}
    </>
    // <CountryWrapper>
    //   <CountryImg src={flag} alt="Heyyyy" />
    //   <InformationContainer>
    //     <Heading information>Poland {data[100].name}</Heading>
    //     <Paragraph>
    //       <MainInformation>Population:</MainInformation> 81,91991 919
    //     </Paragraph>
    //     <Paragraph>
    //       <MainInformation> Region:</MainInformation> Europe
    //     </Paragraph>
    //     <Paragraph>
    //       <MainInformation>Capital:</MainInformation> Warsaw
    //     </Paragraph>
    //   </InformationContainer>
    // </CountryWrapper>
  );
};
