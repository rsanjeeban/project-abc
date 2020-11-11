import React, { Component } from "react";

// Kendo UI
import { process } from "@progress/kendo-data-query";
import { Grid, GridColumn } from "@progress/kendo-react-grid";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import { Window } from "@progress/kendo-react-dialogs";

// Stylesheets - CSS
import "./assets/css/index.css";
import "@progress/kendo-theme-default/dist/all.css";
// Stylesheets - SCSS
import "./assets/sass/main.scss";

// Router
import HomeRoute from "./routes/HomeRoute";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomeRoute />
      </div>
    );
  }
}

export default App;
