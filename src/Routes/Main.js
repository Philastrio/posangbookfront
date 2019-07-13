import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: ${props => props.theme.minHeight};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export default () => <Wrapper />;
