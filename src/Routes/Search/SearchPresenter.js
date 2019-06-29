import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import FatText from "../../Components/FatText";
import Loader from "../../Components/Loader";
import { Table, Divider, Tag } from "antd";

const { Column } = Table;

const Wrapper = styled.div`
  height: 50vh;
`;

const SearchPresenter = ({ term, loading, data }) => {
  if (!term) {
    return (
      <Wrapper>
        <FatText text="Search for something" />
      </Wrapper>
    );
  }
  if (loading) {
    return (
      <Wrapper>
        <Loader />
      </Wrapper>
    );
  }
  if (data && data.searchPost) {
    const dataSource = [data];
    console.log(dataSource);
    const columns = [
      {
        title: "상장번호",
        dataIndex: "prizeNum",
        key: "prizeNum"
      },
      {
        title: "수상자",
        dataIndex: "winnerName",
        key: "winnerName"
      },
      {
        title: "생년월일",
        dataIndex: "birth",
        key: "birth"
      },
      {
        title: "주소",
        dataIndex: "address",
        key: "address"
      },
      {
        title: "공적유형",
        dataIndex: "prizeCategory",
        key: "prizeCategory"
      },
      {
        title: "공적",
        dataIndex: "contribution",
        key: "contribution"
      },

      {
        title: "실과",
        dataIndex: "belongTo",
        key: "belongTo"
      },
      {
        title: "수상일",
        dataIndex: "prizeDate",
        key: "prizeDate"
      },
      {
        title: "훈격",
        dataIndex: "prizeRank",
        key: "prizeRank"
      }
    ];
    return (
      <Wrapper>
        <Table dataSource={dataSource} columns={columns} />
      </Wrapper>
    );
  }
};

SearchPresenter.propTypes = {
  term: PropTypes.string,
  data: PropTypes.shape({
    searchPost: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        prizeNum: PropTypes.string,
        winnerName: PropTypes.string,
        birth: PropTypes.string,
        address: PropTypes.string,
        prizeCategory: PropTypes.string,
        prizeRank: PropTypes.string,
        prizeDate: PropTypes.string,
        contribution: PropTypes.string,
        belongTo: PropTypes.string
      })
    )
  })
};

export default SearchPresenter;
