import React from "react";

class SearchBar extends React.Component {
  handleSearch = event => {
    let { value, name } = event.target;

    this.props.onSearchChange(name, value);
  };

  handleCheck = event => {
    let { value, name } = event.target;

    value = !this.props.checked;
    this.props.onCheckChange(name, value);
  };

  render() {
    const { searchInput, checked } = this.props;

    return (
      <div>
        <h4>Search</h4>
        <input
          name="searchInput"
          value={searchInput}
          type="text"
          onChange={this.handleSearch}
        />
        <div>
          <input
            name="checked"
            value={checked}
            type="checkbox"
            onChange={this.handleCheck}
          />{" "}
          Only show products on stock
        </div>
      </div>
    );
  }
}

export default SearchBar;
