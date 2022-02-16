import React from "react";

function Filter({ fetchCountryByRegion }) {
  return (
    <select defaultValue={"DEFAULT"} name="select" id="select" onChange={(e) => fetchCountryByRegion(e.target.value)}>
      <option className="hide-label" disabled value="DEFAULT">
        Filter by Region
      </option>
      <option value="Africa">Africa</option>
      <option value="America">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
}

export default Filter;
