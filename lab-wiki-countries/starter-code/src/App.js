import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";
import "./App.css";
// import countries from "./countries.json";
import axios from "axios";

class App extends Component {
  state = {
    countries: []
  };

  componentDidMount() {
    // const response = await axios.get("http://206.189.7.127/countries/");
    // this.setState({
    //   countries: response.data
    // });

    axios.get("http://206.189.7.127/countries/").then(response => {
      this.setState({
        countries: response.data
      });
    });
  }

  render() {
    return (
      <div className="App">
        <div>
          <Navbar />
          <div className="container">
            <div className="row">
              <div
                className="col-5"
                style={{ maxHeight: "90vh", overflow: "scroll" }}
              >
                <div className="list-group">
                  <CountriesList countries={this.state.countries} />
                </div>
              </div>
              <Switch>
                <Route exact path="/:cca3" component={CountryDetails} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
