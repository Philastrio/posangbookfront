import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import FatText from "../../Components/FatText";
import { exportDefaultDeclaration } from "@babel/types";

const Wrapper = styled.div`
  height: 50vh;
`;
const Section = styled.div``;

const ResultSection = styled(Section)``;

const SearchPresenter = ({ searchTerm, loading }) => (
  <Wrapper>
    {searchTerm === undefined && <FatText text={"검색어를 입력하세요"} />}
  </Wrapper>
);

SearchPresenter.propTypes = {
  searchTerm: PropTypes.string,
  loading: PropTypes.bool
};

export default SeachPresenter;
