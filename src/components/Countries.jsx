import React, { useState, useEffect } from "react";
import axios from "axios";
import Country from "./Country";
import Input from "./Input";
import Filter from "./Filter";

function Countries() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);

  const fetchCountryByRegion = async (region) => {
    const res = await fetch(`https://restcountries.com/v3.1/region/${region}`);
    const data = await res.json();
    setFilteredCountries(data);
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => {
        setCountries(res.data);
        setLoading(false);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    setFilteredCountries(
      countries.filter((country) => country.name.common.toLowerCase().includes(search.toLowerCase()))
    );
  }, [search, countries]);

  if (loading) {
    return <h2 className="loading">Loading...</h2>;
  }

  return (
    <>
      <div className="search-wrapper">
        <Input setSearch={setSearch} />
        <Filter fetchCountryByRegion={fetchCountryByRegion} />
      </div>

      <section className="cards">
        {filteredCountries.map((country, idx) => (
          <Country key={idx} {...country} />
        ))}
      </section>
    </>
  );
}

export default Countries;
