import React from "react";
import { Link } from "react-router-dom";
import countries from "../countries.json";

const CountryDetails = props => {
  const cca3 = props.match.params.cca3 || "AUS";

  const country = countries.find(country => country.cca3 === cca3);

  return (
    <div className="col-7">
      <h1>{country.name.common}</h1>
      <table className="table">
        <thead />
        <tbody>
          <tr>
            <td style={{ width: "30%" }}>Capital</td>
            <td>{country.capital[0]}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {country.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {country.borders.map(cca3 => {
                  return (
                    <li key={cca3}>
                      <Link to={"/" + cca3}>
                        {
                          countries.find(country => country.cca3 === cca3).name
                            .common
                        }
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CountryDetails;
