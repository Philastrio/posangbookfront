import React from "react";
import { withRouter } from "react-router-dom";
import { useQuery } from "react-apollo-hooks";
import useInput from "../Hooks/useInput";
import { useMutation } from "react-apollo-hooks";
import { ME } from "../sharedQueries";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Input from "./Input";
import ErrorView from "./Error";
import Loader from "./Loader";
import { gql } from "apollo-boost";

const LOG_OUT = gql`
  mutation logUserOut {
    logUserOut @client
  }
`;
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

const HeaderLink = styled.div`
  color: ${props => props.theme.blueColor};
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

const Wrapper = styled.div`
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export default withRouter(({ history }) => {
  const search = useInput("");
  const onSearchSubmit = e => {
    e.preventDefault();
    history.push(`/search?term=${search.value}`); //모든 검색(search)로 간다. 여기서 로그인됐으면 모든 검색/로그아웃이면 일반검색?
  };
  const logOut = useMutation(LOG_OUT);
  const { data, loading } = useQuery(ME);
  console.log(loading, data);

  if (loading === true) {
    return (
      <>
        <Wrapper>
          <Loader />
        </Wrapper>
      </>
    );
  } else {
    if (data && data.me) {
      return (
        <>
          <Header>
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
                <HeaderLink>
                  <Link to="/Auth">포상록 작성</Link>
                </HeaderLink>
                <HeaderLink onClick={logOut}>로그아웃</HeaderLink>
              </HeaderColumn>
            </HeaderWrapper>
          </Header>
        </>
      );
    } else {
      return (
        <HeaderWrapper>
          <ErrorView text={"비정상적인 접근입니다"} />
        </HeaderWrapper>
      );
    }
  }
});
