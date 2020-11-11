// Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Dashboard from "../components/Dashboard";
import NotFound from "../components/NotFound";

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
