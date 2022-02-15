import React, { useState, useEffect } from "react";
import axios from "axios";
import Country from "./Country";
import { FaSearch } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";

function Countries() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);

  // const region = [
  //   {
  //     name: "Africa",
  //   },
  //   {
  //     name: "Asia",
  //   },
  //   {
  //     name: "Americas",
  //   },
  //   {
  //     name: "Europe",
  //   },
  //   {
  //     name: "Oceania",
  //   },
  // ];

  // value={region.name}

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
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="search-wrapper">
        <div className="input-container">
          <AiOutlineSearch className="search-icon" />
          <input type="text" placeholder="Search for a country..." onChange={(e) => setSearch(e.target.value)} />
        </div>

        <select name="select" id="select" onChange={(e) => fetchCountryByRegion(e.target.value)}>
          <option className="hide-label" value="" disabled selected>
            Filter by Region
          </option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
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
