import { gql } from "apollo-boost";

export const ME = gql`
  {
    me {
      userName
    }
  }
`;
// playground에서 쓰는 문법을 여기에 써야 한다.
// 즉, resolver는 playground에서 쓰는 문법을 써야 한다.
