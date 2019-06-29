import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  ${props => props.theme.whiteBox};
  display: flex;
  flex-direction: center;
  align-items: center;
`;

const miniTable = styled.div`
  ${props => props.theme.whiteBox};
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Table = ({
  address,
  belongTo,
  birth,
  contribution,
  prizeCategory,
  prizeDate,
  prizeNum,
  prizeRank,
  winnerName
}) => (
  <Wrapper>
    <Table>
      <miniTable address={address} />
      <miniTable winnerName={winnerName} />
      <miniTable belongTo={belongTo} />
      <miniTable birth={birth} />
      <miniTable contribution={contribution} />
      <miniTable prizeCategory={prizeCategory} />
      <miniTable prizeDate={prizeDate} />
      <miniTable prizeNum={prizeNum} />
      <miniTable prizeRank={prizeRank} />
    </Table>
  </Wrapper>
);

Table.propTypes = {
  address: PropTypes.string,
  belongTo: PropTypes.string,
  birth: PropTypes.string,
  contribution: PropTypes.string,
  prizeCategory: PropTypes.string,
  prizeDate: PropTypes.string,
  prizeNum: PropTypes.string,
  prizeRank: PropTypes.string,
  winnerNam: PropTypes.string
};

export default Table;
