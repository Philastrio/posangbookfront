import { gql } from "apollo-boost";

export const SEARCH = gql`
  query search($term: String!) {
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
      eventName
    }
  }
`;
