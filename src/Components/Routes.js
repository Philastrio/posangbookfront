import PropTypes from "prop-types";
import { Route, Switch, Redirect } from "react-router-dom";
import Auth from "../Routes/Auth";
import React from "react";
import EditPost from "../Routes/EditPost";
import SearchPost from "../Routes/SearchPost";
import AllPost from "../Routes/AllPost";
import Search from "../Routes/Search";
import Main from "../Routes/Main";

const LoggedInRoutes = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route path="/SearchPost" component={SearchPost} />
    <Route path="/EditPost" component={EditPost} />
    <Route path="/AllPost" component={AllPost} />
    <Route path="/search" component={Search} />
  </Switch>
);

const LoggedOutRoutes = () => (
  <Switch>
    <Route exact path="/" component={Auth} />
    <Redirect from="*" to="/" />
  </Switch>
);

const Routes = ({ isLoggedIn }) =>
  isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />;

Routes.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

export default Routes;
