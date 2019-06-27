import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import Input from "./Input";
import useInput from "../Hooks/useInput";
import PropTypes from "prop-types";

const Header = styled.header`
  width: 100%;
  max-width: 935px;
  border: 0px;
  background-color: white;
  border-bottom: ${props => props.theme.boxBorder};
  border-radius: 0px;
  margin-bottom: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 25px 0px;
  z-index: 2;
`;

const HeaderColumn = styled.div`
  width: 33%;
  text-align: center;
  &:first-child {
    margin-right: auto;
    text-align: left;
  }
  &:last-child {
    margin-left: auto;
    text-align: right;
  }
`;

const HeaderWrapper = styled.div`
  width: 100%;
  max-width: ${props => props.theme.maxWidth};
  display: flex;
  justify-content: center;
`;

const HeaderLink = styled(Link)`
  &:not(:last-child) {
    margin-right: 30px;
  }
`;

const Box = styled.div`
  display: flex;
  border: 0px;
  border-radius: 0px;
  width: 100%;
  justify-content: space-evenly;
  flex-direction: row;
`;

const SearchInput = styled(Input)`
  background-color: ${props => props.theme.bgColor};
  padding: 5px;
  font-size: 14px;
  height: auto;
  border-radius: 3px;
  text-align: center;
  width: 90%;
  &::placeholder {
    opacity: 0.8;
    font-weight: 200;
  }
`;

export default withRouter(({ history }) => {
  const search = useInput("");
  const onSearchSubmit = e => {
    e.preventDefault();
    history.push(`/search?term=${search.value}`);
    console.log(history);
  };

  return (
    <Header>
      <HeaderWrapper>
        <HeaderColumn>
          <Link to="/">청양군청 포상록</Link>
        </HeaderColumn>
        <HeaderColumn>
          <form onSubmit={onSearchSubmit}>
            <SearchInput {...search} placeholder="검 색" />
          </form>
        </HeaderColumn>
        <HeaderColumn>
          <HeaderLink to="/Auth">가입</HeaderLink>
        </HeaderColumn>
      </HeaderWrapper>
    </Header>
  );
});
