import React, { Component } from "react";

// Kendo UI
import { process } from "@progress/kendo-data-query";
import { Grid, GridColumn } from "@progress/kendo-react-grid";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import { Window } from "@progress/kendo-react-dialogs";

// Stylesheets
import "./assets/css/main.css";
import "./assets/sass/main.scss";
import "@progress/kendo-theme-default/dist/all.css";

// Router
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomeRoute from "./routes/HomeRoute";

// Components
import Dashboard from "./components/Dashboard";
import Orders from "./components/Orders/Index";

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
