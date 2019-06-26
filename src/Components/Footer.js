import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-weight: 200;
  font-size: 12px;
  margin: 10px 0px;
  height: 20px;
`;

const List = styled.ul`
  display: flex;
`;

const ListItem = styled.li`
  &:not(:last-child) {
    margin-right: 50px;
  }
`;

const Link = styled.a`
  color: ${props => props.theme.blackColor};
`;

const Copyright = styled.span`
  color: ${props => props.theme.blackColor};
`;

export default () => (
  <Footer>
    <List>
      <ListItem>
        <Link href="http://www.cheongyang.go.kr/kor.do" target="_blank">
          청양군청
        </Link>
      </ListItem>
      <ListItem>
        <Link href="#">이메일: han_gang@naver.com</Link>
      </ListItem>
      <Copyright>포상록 {new Date().getFullYear()} &copy; by Hankang</Copyright>
    </List>
  </Footer>
);
