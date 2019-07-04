import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Text = styled.span`
  font-weight: 600;
  display: flex;
  flex-direction: column;
  align-content: center;
  text-align: center;
  padding-top: 15vh;
  font-size: 2vh;
`;

const FatText = ({ text, className }) => (
  <Text className={className}>{text}</Text>
);

FatText.propType = {
  text: PropTypes.string.isRequired
};

export default FatText;
