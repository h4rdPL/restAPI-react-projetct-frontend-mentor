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
`;

const StyledButton = styled(Button)`
  margin-bottom: 4rem;
`;
const DetailsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
`;

const DetailsInformationWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  row-gap: 2rem;
`;
const CountryImg = styled.img`
  min-width: 100%;
  height: 300px;
  margin-bottom: 3rem;
`;
const FirstList = styled.ul``;
const SecondList = styled.ul``;
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
}) => {
  return (
    <>
      <Wrapper>
        <StyledButton as={Link} to="/">
          <HiOutlineArrowNarrowLeft /> Back
        </StyledButton>
        <DetailsWrapper>
          <CountryImg src="https://flagcdn.com/be.svg" alt="Belgium" />
          <DetailsInformationWrapper>
            <Heading big>{country}</Heading>
            <FirstList>
              <ListItems>
                <Paragraph>
                  <MainInformation>Native Name</MainInformation> {population}
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
                <Paragraph borderCountries>France</Paragraph>
                <Paragraph borderCountries>Germany</Paragraph>
                <Paragraph borderCountries>Netherlands</Paragraph>
              </BorderCountriesWrapper>
            </ThirdList>
          </DetailsInformationWrapper>
        </DetailsWrapper>
      </Wrapper>
    </>
  );
};
