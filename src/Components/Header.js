import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import SearchPost from "../Routes/SearchPost";
import SearchPostForHeader from "./SearchPostForHeader";
import Auth from "../Routes/Auth";

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

const HeaderLink = styled(Link)`
  &:not(:last-child) {
    margin-right: 30px;
  }
`;

export default () => {
  return (
    <Header>
      <HeaderColumn>
        <HeaderLink to="/">청양군청 포상록</HeaderLink>
      </HeaderColumn>
      <SearchPostForHeader />
      <HeaderColumn>
        <HeaderLink to="/Auth">가입</HeaderLink>
      </HeaderColumn>
    </Header>
  );
};
