import React from "react";
import { withRouter } from "react-router-dom";
import SearchPresenter from "./SearchPresenter";
import { useQuery } from "react-apollo-hooks";
import { SEARCH } from "./SearchQueries";
import queryString from "query-string";

export default withRouter(({ location: { search } }) => {
  const { term } = queryString.parse(search, { arrayFormat: "comma" });

  const { data, loading } = useQuery(SEARCH, {
    skip: !term,
    variables: { term }
  });
  console.log(term, data.searchPost, loading);
  return <SearchPresenter term={term} data={data} loading={loading} />;
  /* return term; */
});
