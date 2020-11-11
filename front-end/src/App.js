import React, { Component } from "react";

import { process } from "@progress/kendo-data-query";
import { Grid, GridColumn } from "@progress/kendo-react-grid";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import { Window } from "@progress/kendo-react-dialogs";

import "./App.css";
import "@progress/kendo-theme-default/dist/all.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomeRoute from "./routes/HomeRoute";
// function App() {
//   return (
//     <div className="App">
//       <h1>Hello BackOffice!</h1>
//     </div>
//   );
// }
import Dashboard from "./components/Dashboard";
import Orders from "./components/Orders/Index";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomeRoute />
        {/* <Router>
          <Switch>
            <Route path="/">
              <Dashboard />
            </Route>
            <Route path="/orders">
              <Orders />
            </Route>
          </Switch>
        </Router> */}
      </div>
    );
  }
}

export default App;
