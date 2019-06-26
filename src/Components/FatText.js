import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { exportDefaultDeclaration } from "@babel/types";

const Text = styled.span`
  font-weight: 600;
`;

const FatText = ({ text, className }) => (
  <Text className={className}>{text}</Text>
);

FatText.propType = {
  text: PropTypes.string.isRequired
};

export default FatText;