import React, { Component } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

class FilterableProducts extends Component {
  state = {
    searchInput: "",
    checked: false,
    products: this.props.products,
    filtered: this.props.products
  };

  onSearchChange = (name, value) => {
    const { products, checked } = this.state;

    let filtered = products.filter(el => {
      return el.name.toLowerCase().includes(value.toLowerCase());
    });

    if (checked) filtered = filtered(el => el.stocked);

    this.setState({
      // searchInput: value
      [name]: value,
      filtered
    });
  };

  onCheckChange = (name, value) => {
    let { filtered, products, searchInput } = this.state;

    if (value === true) {
      filtered = filtered.filter(el => el.stocked === value);
    } else {
      filtered = products.filter(el => {
        return el.name.toLowerCase().includes(searchInput.toLowerCase());
      });
    }

    this.setState({
      // checked: value
      [name]: value,
      filtered
    });
  };

  render() {
    const { searchInput, checked, filtered } = this.state;

    return (
      <React.Fragment>
        <h2>IronStore</h2>
        <SearchBar
          checked={checked}
          searchInput={searchInput}
          onSearchChange={this.onSearchChange}
          onCheckChange={this.onCheckChange}
        />
        <ProductTable products={filtered} />
      </React.Fragment>
    );
  }
}

export default FilterableProducts;
