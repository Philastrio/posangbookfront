import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  min-height: calc(80vh - 50px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Box = styled.div`
  display: flex;
  border: 2px;
  border-radius: 0px;
  width: 100%;
  height: 20vh;
`;

export default () => {
  return (
    <Wrapper>
      <Box />
    </Wrapper>
  );
};
