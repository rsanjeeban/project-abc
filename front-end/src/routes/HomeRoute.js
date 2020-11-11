import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Dashboard from "../components/Dashboard";
import NotFound from "../components/NotFound";
import Orders from "../components/Orders/Index";

var HomeRoute = function () {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Dashboard} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};

export default HomeRoute;
