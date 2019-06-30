import React from "react";
import styled, { keyframes } from "styled-components";
import { Logo } from "./Icons";

const Animation = keyframes`
  0% {
    opacity: 0
  }
  50% {
    opacity: 1
  }
  100%{
    opacity: 0;
  }
`;

const Loader = styled.div`
  min-height: ${props => props.theme.minHeight};
  animation: ${Animation} 1s linear infinite;

  width: 100%;
  position: absolute;
  top: 40%;
  left: 50%;
`;

export default () => (
  <Loader>
    <Logo size={36} />
  </Loader>
);
