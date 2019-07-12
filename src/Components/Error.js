import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Error = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  max-height: ${props => props.theme.minHeight};
  color: red;
`;

const ErrorView = ({ text, className }) => (
  <Error className={className}>{text}</Error>
);

ErrorView.propType = {
  text: PropTypes.string.isRequired
};

export default ErrorView;
