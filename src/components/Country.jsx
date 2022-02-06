import { Link } from "react-router-dom";
import CountryPage from "../pages/CountryPage";

function Country({ name, population, region, capital, flags }) {
  return (
    <Link to={`/${name.common}`} component={CountryPage}>
      <div>
        <img src={flags.svg} alt={name.common} />
        <h4>{name.common}</h4>
        <p>Population: {population.toLocaleString("en-GB")}</p>
        <p>Region: {region}</p>
        <p>Capital: {capital}</p>
      </div>
    </Link>
  );
}

export default Country;
