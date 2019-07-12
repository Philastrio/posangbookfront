import React from "react";
import { withRouter } from "react-router-dom";
import HeaderPresenter from "./HeaderPresenter";
import { useQuery } from "react-apollo-hooks";
import { LOG_OUT } from "./HeaderQueries";
import useInput from "../../Hooks/useInput";
import { useMutation } from "react-apollo-hooks";
import { ME } from "../../sharedQueries";

export default withRouter(({ history }) => {
  const search = useInput("");
  const onSearchSubmit = e => {
    e.preventDefault();
    history.push(`/search?term=${search.value}`); //모든 검색(search)로 간다. 여기서 로그인됐으면 모든 검색/로그아웃이면 일반검색?
  };
  const logOut = useMutation(LOG_OUT);
  const { data, loading } = useQuery(ME);
  return (
    <HeaderPresenter
      search={search}
      data={data}
      loading={loading}
      logOut={logOut}
      onSearchSubmit={onSearchSubmit}
    />
  );
});
