import { Link } from "react-router-dom";

function Country({ name, population, region, capital, flags }) {
  return (
    <>
      <div className="card">
        <Link className="card-link" to={name.common}>
          <img src={flags.png} alt={name.common} />
          <div className="card__info-wrapper">
            <h3 className="card__country-name">{name.common}</h3>
            <p className="card__population">
              <strong>Population:</strong> {population.toLocaleString("en-GB")}
            </p>
            <p className="card__region">
              <strong>Region:</strong> {region}
            </p>
            <p className="card__capital">
              <strong>Capital:</strong> {capital}
            </p>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Country;
