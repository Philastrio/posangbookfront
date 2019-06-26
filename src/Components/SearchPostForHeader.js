import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

/* const Wrapper = styled.div`
  min-height: calc(85vh - 50px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`; */

const Box = styled.div`
  display: flex;
  border: 0px;
  border-radius: 0px;
  width: 100%;
  justify-content: space-evenly;
  flex-direction: row;
`;

const SearchBar = styled.input`
  width: 160px;
  border: ${props => props.theme.boxBorder};
  border-radius: ${props => props.theme.borderRadius};
  background-color: ${props => props.theme.bgColor};
  ::placeholder {
    text-align: center;
    font-size: ${props => props.theme.fontSize};
  }
`;

const SearchButton = styled.button`
  width: 70px;
  border: ${props => props.theme.boxBorder};
  border-radius: ${props => props.theme.borderRadius};
  background-color: ${props => props.theme.blueColor};
  font-size: ${props => props.theme.fontSize};
  color: white;
`;

export default () => {
  return (
    <Box>
      <SearchBar placeholder={"이 름"} />
      <SearchBar placeholder={"생년월일"} />
      <SearchButton>검 색</SearchButton>
    </Box>
  );
};
