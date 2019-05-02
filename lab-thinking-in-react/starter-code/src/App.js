import React from "react";
import FilterableProduct from "./components/FilterableProduct";
import "./App.css";
import { data } from "./data.json";

const App = () => {
  return (
    <div className="App">
      <FilterableProduct products={data} />
    </div>
  );
};
export default App;
