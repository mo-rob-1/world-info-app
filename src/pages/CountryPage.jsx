import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { HiArrowNarrowLeft } from "react-icons/hi";
import axios from "axios";
import Button from "../components/Button";
import "../styles/CountryPage.css";

function CountryPage() {
  const [country, setCountry] = useState([]);
  const [loading, setLoading] = useState(true);
  const { name } = useParams();

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${name}`)
      .then((res) => res.json())
      .then((result) => {
        setCountry(result);
        console.log(result);
        setLoading(false);
      });
  }, []);

  // Looping through native name objects in the api
  const loopObj = (obj) => {
    return Object.keys(obj).map((key) => obj[key]);
  };

  // Fetch border country details
  const getBorderCountryInfo = async (border) => {
    const response = await fetch(`https://restcountries.com/v3.1/alpha/${border}`);
    const data = await response.json();
    setCountry(data);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="CountryPage">
      {country.map((c) => {
        const {
          numericCode,
          name: { common },
          flags: { svg },
          population,
          region,
          capital,
          subregion,
          tld,
          languages,
          currencies,
        } = c;
        return (
          <div className="country-pg" key={numericCode}>
            <Link to={`/`} className="country-pg__back-btn-container">
              <div className="country-pg__back-btn">
                <HiArrowNarrowLeft fontSize={20} />
                <span>Back</span>
              </div>
            </Link>
            <div className="country-pg__container">
              <div className="country-pg__col-1">
                <img className="country-pg__img" src={svg} alt={common} />
              </div>
              <div className="country-pg__col-2">
                <h1 className="country-pg__name">{common}</h1>
                <div className="country-pg__container-2">
                  <div className="country-pg__inner-col-1">
                    <p className="country-pg__native-name">
                      <strong>Official Name:</strong> {loopObj(c?.name.nativeName)[0].official}
                    </p>
                    <p className="country-pg__population">
                      <strong>Population:</strong> {population.toLocaleString("en-GB")}
                    </p>
                    <p className="country-pg__region">
                      <strong>Region:</strong> {region}
                    </p>
                    <p className="country-pg__sub-region">
                      <strong>Sub Region:</strong> {subregion}
                    </p>
                    <p className="country-pg__capital">
                      <strong>Capital:</strong> {capital}
                    </p>
                  </div>
                  <div className="country-pg__inner-col-2">
                    <p className="country-pg__domain">
                      <strong>Top-Level Domain:</strong> {tld}
                    </p>
                    <p className="country-pg__currency">
                      <strong>Currency:</strong>{" "}
                      {Object.values(currencies)
                        .map((val) => val.name)
                        .join(", ")}
                    </p>
                    <p className="country-pg__language">
                      <strong>Languages:</strong> {Object.values(languages).join(", ")}
                    </p>
                  </div>
                </div>
                <div className="country-pg__border-countries-container">
                  <h3 className="country-pg__border-countries">Border Countries:</h3>
                  <div className="country-pg__borders">
                    {c.borders ? (
                      c?.borders?.map((border, index) => (
                        <Button key={index} onClick={() => getBorderCountryInfo(border)}>
                          {border}
                        </Button>
                      ))
                    ) : (
                      <p>None</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CountryPage;
