import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import countries from "../countries.json";

class CountryDetails extends React.Component {
  //   state = {
  //     country: {}
  //   };

  //   componentDidMount() {
  //     axios.get("http://206.189.7.127/countries/italy").then(response => {
  //       console.log(response.data);
  //       this.setState({ country: response.data[0] });
  //     });
  //   }

  render() {
    // const { country } = this.state;

    const cca3 = this.props.match.params.cca3 || "AUS";

    const country = countries.find(country => country.cca3 === cca3);

    return (
      <div className="col-7">
        <h1>{country.name && country.name.common}</h1>
        <table className="table">
          <thead />
          <tbody>
            <tr>
              <td style={{ width: "30%" }}>Capital</td>
              <td>{country.capital && country.capital[0]}</td>
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
                  {country.borders &&
                    country.borders.map(cca3 => {
                      return (
                        <li key={cca3}>
                          <Link to={"/" + cca3}>
                            {
                              countries.find(country => country.cca3 === cca3)
                                .name.common
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
  }
}

export default CountryDetails;
