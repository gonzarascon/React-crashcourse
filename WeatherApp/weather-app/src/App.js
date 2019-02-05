import React, { Component } from "react";
import { MuiThemeProvider } from "@material-ui/core";

import "./App.css";
import LocationList from "./components/LocationList";

const cities = [
  "Buenos Aires,ar",
  "San Francisco,us",
  "Santa Monica,us",
  "Paris,fr"
];
class App extends Component {
  handleSelectedLocation = city => {
    console.log(`"handleSelectionLocation" ${city}`);
  };

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <LocationList
            cities={cities}
            onSelectedLocation={this.handleSelectedLocation}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
