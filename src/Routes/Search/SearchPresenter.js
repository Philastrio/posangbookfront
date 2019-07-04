import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import FatText from "../../Components/FatText";
import Loader from "../../Components/Loader";
import { Table } from "antd";
import "antd/dist/antd.css";

const Wrapper = styled.div`
  min-height: ${props => props.theme.minHeight};
`;

const SearchPresenter = ({ term, loading, data }) => {
  if (!term) {
    return (
      <Wrapper>
        <FatText text="검색어를 입력해주세요" />
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
    const dataSource = data.searchPost; /* searchPost값은 Array로 들어온다. */
    const columns = [
      {
        key: "prizeNum",
        title: "상장번호",
        dataIndex: "prizeNum"
      },
      {
        key: "winnerName",
        title: "수상자",
        dataIndex: "winnerName"
      },
      {
        key: "birth",
        title: "생년월일",
        dataIndex: "birth"
      },
      {
        key: "address",
        title: "주소",
        dataIndex: "address"
      },
      {
        key: "prizeCategory",
        title: "공적유형",
        dataIndex: "prizeCategory"
      },
      {
        key: "contribution",
        title: "공적",
        dataIndex: "contribution"
      },

      {
        key: "belongTo",
        title: "실과",
        dataIndex: "belongTo"
      },
      {
        key: "prizeDate",
        title: "수상일",
        dataIndex: "prizeDate"
      },
      {
        key: "eventName",
        title: "행사이름",
        dataIndex: "eventName"
      },
      {
        key: "prizeRank",
        title: "훈격",
        dataIndex: "prizeRank"
      }
    ];
    return (
      <Wrapper>
        <Table
          dataSource={dataSource}
          columns={columns}
          rowKey={record => record.prizeNum} // prizeNum으로 unique값을 만들었다.
        />
      </Wrapper>
    );
  }
};

SearchPresenter.propTypes = {
  term: PropTypes.string,
  data: PropTypes.shape({
    searchPost: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        prizeNum: PropTypes.string,
        winnerName: PropTypes.string,
        birth: PropTypes.string,
        address: PropTypes.string,
        prizeCategory: PropTypes.string,
        prizeRank: PropTypes.string,
        prizeDate: PropTypes.string,
        contribution: PropTypes.string,
        belongTo: PropTypes.string,
        eventName: PropTypes.string
      })
    )
  })
};

export default SearchPresenter;
