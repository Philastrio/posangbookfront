import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Error = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  text-align: center;
  max-height: ${props => props.theme.minHeight};
`;

const ErrorView = ({ text, className }) => (
  <Error className={className}>{text}</Error>
);

ErrorView.propType = {
  text: PropTypes.string.isRequired
};

export default ErrorView;
