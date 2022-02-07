import { Link } from "react-router-dom";

function Country({ name, population, region, capital, flags }) {
  return (
    <>
      <Link to={name.common}>
        <img src={flags.svg} alt={name.common} />
        <h4>{name.common}</h4>
        <p>Population: {population.toLocaleString("en-GB")}</p>
        <p>Region: {region}</p>
        <p>Capital: {capital}</p>
      </Link>
    </>
  );
}

export default Country;
