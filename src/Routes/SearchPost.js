import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  min-height: calc(85vh - 50px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Box = styled.div`
  display: flex;
  ${props => props.theme.whiteBox}
  border-radius: 0px;
  width: 80%;
  padding: 20px;
  margin-bottom: 15px;
  justify-content: center;
  flex-direction: row;
`;

const SearchBar = styled.input`
  width: 100px;
  border: ${props => props.theme.boxBorder};
  border-radius: ${props => props.theme.borderRadius};
  background-color: ${props => props.theme.bgColor};
  ::placeholder {
    text-align: center;
    font-size: ${props => props.theme.fontSize};
  }
`;

const SearchButton = styled.button`
  width: 50px;
  border: ${props => props.theme.boxBorder};
  border-radius: ${props => props.theme.borderRadius};
  background-color: #ffbe76;
  font-size: ${props => props.theme.fontSize};
`;

export default () => {
  return (
    <Wrapper>
      <Box>
        <SearchBar placeholder={"이 름"} />
        <SearchBar placeholder={"생년월일"} />
        <SearchButton>검 색</SearchButton>
      </Box>
    </Wrapper>
  );
};
