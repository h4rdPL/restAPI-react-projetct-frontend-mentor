import React from "react";
import { useLocation } from "react-router-dom";
import { MainTemplate } from "../templates/MainTemplate";
import { DetailsTemplate } from "../templates/DetailsTemplate";
export const DetailPage = () => {
  const location = useLocation();
  console.log(location.pathname);

  const dummyCountry = {
    id: 1,
    country: "Belgium",
    population: "2000000",
    region: "Europe",
    subRegion: "Western Europe",
    capital: "Brussels",
    topLevelDomain: ".be",
    currencies: "Euro",
    languages: "Dutch, French, German",
  };
  return (
    <>
      <MainTemplate>
        <DetailsTemplate
          country={dummyCountry.country}
          population={dummyCountry.population}
          region={dummyCountry.region}
          subRegion={dummyCountry.subRegion}
          capital={dummyCountry.capital}
          topLevelDomain={dummyCountry.topLevelDomain}
          currencies={dummyCountry.currencies}
          languages={dummyCountry.languages}
        />
      </MainTemplate>
    </>
  );
};
