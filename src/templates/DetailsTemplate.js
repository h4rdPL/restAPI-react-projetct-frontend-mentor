import React from "react";
import styled from "styled-components";
import { Button } from "../components/atoms/Button";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { Paragraph } from "../components/atoms/Paragraph";
import { Heading } from "../components/atoms/Heading";
import { MainInformation } from "../components/atoms/NameElement";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  min-width: 100%;
  padding: 2rem;
  @media (min-width: 1400px) {
    padding: 2rem 4rem;
  }
`;

const StyledButton = styled(Button)`
  margin-bottom: 4rem;
`;
const DetailsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  align-items: center;
  @media (min-width: 1400px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
  }
`;

const DetailsInformationWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  row-gap: 2rem;
`;
const CountryImg = styled.img`
  min-width: 50%;
  justify-self: center;
  height: 140px;
  margin-bottom: 3rem;
  @media (min-width: 768px) {
    min-width: 30%;
  }
  @media (min-width: 1400px) {
    width: 80%;
    height: 450px;
  }
`;
const FirstList = styled.ul`
  @media (min-width: 1400px) {
    grid-column: 1/2;
  }
`;
const SecondList = styled.ul`
  @media (min-width: 1400px) {
    grid-column: 2/-1;
  }
`;
const ThirdList = styled.div``;
const BorderCountriesWrapper = styled.div`
  display: flex;
  grid-gap: 1rem;
  margin-top: 1rem;
`;
const ListItems = styled.li`
  margin-bottom: 1rem;
`;
export const DetailsTemplate = ({
  country,
  population,
  region,
  subRegion,
  capital,
  topLevelDomain,
  currencies,
  languages,
  flag,
  nativeName,
  borderCountries,
}) => {
  return (
    <>
      <Wrapper>
        <StyledButton as={Link} to="/">
          <HiOutlineArrowNarrowLeft /> Back
        </StyledButton>
        <DetailsWrapper>
          <CountryImg src={flag} alt="Belgium" />
          <DetailsInformationWrapper>
            <Heading big>{country}</Heading>
            <FirstList>
              <ListItems>
                <Paragraph>
                  <MainInformation>Native Name</MainInformation> {nativeName}
                </Paragraph>
              </ListItems>
              <ListItems>
                <Paragraph>
                  <MainInformation>Population</MainInformation> {population}
                </Paragraph>
              </ListItems>
              <ListItems>
                <Paragraph>
                  <MainInformation>Region</MainInformation> {region}
                </Paragraph>
              </ListItems>
              <ListItems>
                <Paragraph>
                  <MainInformation>Sub Region</MainInformation> {subRegion}
                </Paragraph>
              </ListItems>
              <ListItems>
                <Paragraph>
                  <MainInformation>Capital</MainInformation> {capital}
                </Paragraph>
              </ListItems>
            </FirstList>
            <SecondList>
              <ListItems>
                <Paragraph>
                  <MainInformation>Top level Domain</MainInformation>{" "}
                  {topLevelDomain}
                </Paragraph>
              </ListItems>
              <ListItems>
                <Paragraph>
                  <MainInformation>Currencies</MainInformation> {currencies}
                </Paragraph>
              </ListItems>
              <ListItems>
                <Paragraph>
                  <MainInformation>languages</MainInformation> {languages}
                </Paragraph>
              </ListItems>
            </SecondList>
            <ThirdList>
              <MainInformation>Border Countries:</MainInformation>
              <BorderCountriesWrapper>
                {borderCountries ? (
                  borderCountries.map((border) => (
                    <Paragraph key={border} borderCountries>
                      {border}
                    </Paragraph>
                  ))
                ) : (
                  <Paragraph borderCountries>No border</Paragraph>
                )}
              </BorderCountriesWrapper>
            </ThirdList>
          </DetailsInformationWrapper>
        </DetailsWrapper>
      </Wrapper>
    </>
  );
};
