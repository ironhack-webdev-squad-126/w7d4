import React from "react";

class TemperatureInput extends React.Component {
  handleChange = event => {
    const temperature = event.target.value;
    const { scale } = this.props;

    // we get the onTemperatureChange from the props, and it will change the parent's state
    // we pass the temperature and the scale so that the parent component knows which input triggered the onTemperatureChange function
    this.props.onTemperatureChange(temperature, scale);
  };

  render() {
    const { temperature, scale } = this.props;
    return (
      <fieldset>
        <legend>Enter temperature in {scale}</legend>
        <input type="text" value={temperature} onChange={this.handleChange} />
      </fieldset>
    );
  }
}

export default TemperatureInput;
