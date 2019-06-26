import { gql } from "apollo-boost";

export const SEARCHALL = gql`
  query searchAll($term: String!) {
    searchPost(term: $term) {
      prizeNum
      winnerName
      birth
      address
      prizeCategory
      prizeRank
      prizeDate
      contribution
      belongTo
    }
    searchUser(term: $term) {
      userName
      belongTo
    }
  }
`;

export const SEARCHNORMAL = gql`
  query searchNormal($term: String!) = {
    searchPost(term: $term) {
      winnerName
      birth
    }
  }
`;
