import {
  CountryWrapper,
  CountryImg,
  InformationContainer,
  Spinner,
} from "./CountryInformation";
import { Paragraph } from "../atoms/Paragraph";
import { MainInformation } from "../atoms/NameElement";
import { Heading } from "../atoms/Heading";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Dna } from "react-loader-spinner";
import { FilterTemplate } from "../../templates/FilterTemplate";

export default {
  title: "Example/Organisms/Country Informations",
  component: CountryWrapper,
};
export const Detail = () => {
  const [query, setQuery] = useState("");

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const URL = `https://restcountries.com/v2/all`;
      try {
        const resp = await axios.get(URL);
        setData(resp.data);
        setIsLoading(!isLoading);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const getFilteredItems = (query, data) => {
    if (!query) {
      return data;
    }
    return data.filter((item) => {
      return item.name.includes(query);
    });
  };
  console.log(query);
  const filteredItems = getFilteredItems(query, data);
  return (
    <>
      <FilterTemplate filteredItems={filteredItems} />

      {isLoading ? (
        <Spinner>
          <Dna
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
        </Spinner>
      ) : (
        filteredItems.map(
          ({ name, population, flags, region, capital, alpha3Code }) => (
            <CountryWrapper as={Link} to={alpha3Code} key={name}>
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
          )
        )
      )}
    </>
  );
};
