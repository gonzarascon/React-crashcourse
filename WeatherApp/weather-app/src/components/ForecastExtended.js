import React, { Component } from "react";
import PropTypes from "prop-types";

class ForecastExtendend extends Component {
  render() {
    const { city } = this.props;
    return <div>Pronostico Extendido {city}</div>;
  }
}

ForecastExtendend.propTypes = {
  city: PropTypes.func.isRequired
};

export default ForecastExtendend;
