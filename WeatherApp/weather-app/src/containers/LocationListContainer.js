import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

// REDUX IMPORTS
import { setCity } from "./../actions";

import LocationList from "./../components/LocationList";

class LocationListContainer extends Component {
  handleSelectedLocation = city => {
    this.props.setCity(city);
  };

  render() {
    return (
      <div>
        <LocationList
          cities={this.props.cities}
          onSelectedLocation={this.handleSelectedLocation}
        />
      </div>
    );
  }
}

LocationListContainer.propTypes = {
  setCity: PropTypes.func.isRequired,
  cities: PropTypes.array.isRequired
};

const mapDispatchToProps = dispatch => ({
  /*
    'setCity:' is the property mapped from 
    the 'setCity()' action creator.
    */
  setCity: value => dispatch(setCity(value))
});

export default connect(
  null,
  mapDispatchToProps
)(LocationListContainer);
