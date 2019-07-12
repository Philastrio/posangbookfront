import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  height: ${props => props.theme.minHeight};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export default () => <Wrapper />;
