import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import Input from "../Input";
import useInput from "../../Hooks/useInput";
import { LOG_OUT } from "./HeaderQueries";
import { useMutation, useQuery } from "react-apollo-hooks";
import { ME } from "../../sharedQueries";
import FatText from "../FatText";

const Header = styled.header`
  width: 100%;
  border: 0px;
  max-width: 935px;
  background-color: white;
  border-bottom: ${props => props.theme.boxBorder};
  border-radius: 0px;
  margin-bottom: 60px;
  margin: 0 auto; /* 이걸 넣어야 가운데에 있게 된다*/

  display: flex;
  justify-items: center;
  align-items: center;
  padding: 25px 0px;
  z-index: 2;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  max-width: ${props => props.theme.maxWidth};
  display: flex;
  justify-content: center;
`;

const HeaderColumn = styled.div`
  width: 33%;
  display: flex;
  text-align: center;

  justify-content: space-around;
  align-items: center;

  &:first-child {
    justify-content: start;
  }
  &:last-child {
    margin-left: auto;
    text-align: right;
  }
`;

const HeaderLink = styled(Link)`
  &:not(:last-child) {
    margin-right: 30px;
  }
`;

const SearchInput = styled(Input)`
  background-color: ${props => props.theme.bgColor};
  padding: 5px;
  font-size: 14px;
  height: auto;
  border-radius: 3px;
  text-align: center;
  width: 100%;
  &::placeholder {
    opacity: 0.8;
    font-weight: 200;
  }
`;

const UserName = styled.span`
  &:not(:last-child) {
    margin-right: 30px;
  }
`;

export default withRouter(({ history }) => {
  const search = useInput("");
  const onSearchSubmit = e => {
    e.preventDefault();
    history.push(`/search?term=${search.value}`); //모든 검색(search)로 간다. 여기서 로그인됐으면 모든 검색/로그아웃이면 일반검색?
  };
  const logOut = useMutation(LOG_OUT);
  const { data } = useQuery(ME);

  return (
    <Header>
      {data.me ? (
        <HeaderWrapper>
          <HeaderColumn>
            <Link to="/">청양군 포상록</Link>
          </HeaderColumn>
          <HeaderColumn>
            <form onSubmit={onSearchSubmit}>
              <SearchInput
                value={search.value}
                onChange={search.onChange}
                placeholder="검 색"
              />
            </form>
          </HeaderColumn>
          <HeaderColumn>
            <UserName>{data.me.userName} 님</UserName>
            <HeaderLink to="/Auth">포상록 작성</HeaderLink>
            <HeaderLink onClick={logOut}>로그아웃</HeaderLink>
          </HeaderColumn>
        </HeaderWrapper>
      ) : (
        "Error"
      )}
    </Header>
  );
});
