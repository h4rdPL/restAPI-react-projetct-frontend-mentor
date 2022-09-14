import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MainTemplate } from "../templates/MainTemplate";
import { DetailsTemplate } from "../templates/DetailsTemplate";
import axios from "axios";
export const DetailPage = () => {
  // const dummyCountry = {
  //   id: 1,
  //   country: "Belgium",
  //   population: "2000000",
  //   region: "Europe",
  //   subRegion: "Western Europe",
  //   capital: "Brussels",
  //   topLevelDomain: ".be",
  //   currencies: "Euro",
  //   languages: "Dutch, French, German",
  // };
  const [data, setData] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  let params = useParams();
  console.log(data.region);
  useEffect(() => {
    const getData = async () => {
      const URL = `https://restcountries.com/v3.1/alpha/${params.id}`;
      try {
        const resp = await axios.get(URL);
        setData(resp.data);
        // const item = data.find((element) =>
        //   element.alpha3Code.includes(location.pathname)
        // );
      } catch (err) {
        console.log(err);
      }
    };
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(data);

  return (
    <>
      <MainTemplate>
        {data.map(
          ({
            area,
            capital,
            region,
            subregion,
            flags,
            name,
            tld,
            currencies,
            population,
            languages,
            nativeName,
            borders,
          }) => (
            <DetailsTemplate
              nativeName={name.official}
              key={params}
              flag={flags.svg}
              country={name.common}
              population={population}
              region={region}
              subRegion={subregion}
              capital={capital}
              topLevelDomain={tld}
              currencies={Object.values(Object.keys(currencies))}
              languages={Object.values(languages).join(", ")}
              borderCountries={borders}
            />
          )
        )}
      </MainTemplate>
      {/* {(location.pathname) ? "są dane" : "Nie maaa"} */}
    </>
  );
};
