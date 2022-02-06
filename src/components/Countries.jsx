import React, { useState, useEffect } from "react";
import axios from "axios";
import Country from "./Country";
import { FaSearch } from "react-icons/fa";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Countries() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);

  const region = [
    {
      name: "Africa",
    },
    {
      name: "Asia",
    },
    {
      name: "Americas",
    },
    {
      name: "Europe",
    },
  ];

  const fetchCountryByRegion = async (region) => {
    const res = await fetch(`https://restcountries.com/v3.1/subregion/${region}`);
    const data = await res.json();
    setFilteredCountries(data);
    console.log(data);
  };

  useEffect(() => {
    fetchCountryByRegion();
  }, []);

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
      <div className="input-container">
        <FaSearch />
        <input type="text" placeholder="Search for a country..." onChange={(e) => setSearch(e.target.value)} />
      </div>

      <select name="select" id="select" value={region.name} onChange={(e) => fetchCountryByRegion(e.target.value)}>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
      </select>

      {filteredCountries.map((country, idx) => (
        <Country key={idx} {...country} />
      ))}
    </>
  );
}

export default Countries;
