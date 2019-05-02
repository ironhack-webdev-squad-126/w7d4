import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";
import "./App.css";

class App extends Component {
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
                  <CountriesList />
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
