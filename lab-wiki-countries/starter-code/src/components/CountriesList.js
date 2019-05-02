import React from "react";
import { Link } from "react-router-dom";
import countries from "../countries.json";

const CountriesList = () => {
  return (
    <React.Fragment>
      {countries.map(el => {
        return (
          <Link
            key={el.cca3}
            className="list-group-item list-group-item-action"
            to={"/" + el.cca3}
          >
            <span role="img">{el.flag}</span> {el.name.common}
          </Link>
        );
      })}
    </React.Fragment>
  );
};

export default CountriesList;
