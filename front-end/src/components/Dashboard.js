import {
  BrowserRouter as Router,
  HashRouter,
  Switch,
  Route,
} from "react-router-dom";

import { Component, Fragment } from "react";

import Header from "./Shared/Header";
import Sidebar from "./Shared/Sidebar";
import Home from "./Home/Index";
import Orders from "./Orders/Index";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Header name="sanjee" />

        {/* <Sidebar></Sidebar> */}

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/orders" component={Orders} />
        </Switch>
      </div>
    );
  }
}

export default Dashboard;
