import React from "react";
import { withRouter } from "react-router-dom";
import SearchPresenter from "./SearchPresenter";
import { useQuery } from "react-apollo-hooks";
import { SEARCHALL, SEARCHNORMAL } from "./SearchQueries";

export default withRouter;
