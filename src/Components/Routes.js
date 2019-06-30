import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
import Auth from "../Routes/Auth";
import React from "react";
import EditPost from "../Routes/EditPost";
import SearchPost from "../Routes/SearchPost";
import AllPost from "../Routes/AllPost";
import SearchResult from "../Routes/SearchResult";
import Search from "../Routes/Search";

const LoggedInRoutes = () => (
  <Switch>
    <Route exact path="/" component={SearchResult} />
    <Route path="/SearchPost" component={SearchPost} />
    <Route path="/EditPost" component={EditPost} />
    <Route path="/AllPost" component={AllPost} />
  </Switch>
);

const LoggedOutRoutes = () => (
  <Switch>
    <Route exact path="/" component={Auth} />
    <Route path="/Auth" component={Auth} />
    <Route path="/search" component={Search} />
  </Switch>
);

const Routes = ({ isLoggedIn }) =>
  isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />;

Routes.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

export default Routes;
