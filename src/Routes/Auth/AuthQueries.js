import { gql } from "apollo-boost";

export const LOG_IN = gql`
  mutation requestSecret($email: String!) {
    requestSecret(email: $email)
  }
`;

export const CREATE_ACCOUNT = gql`
  mutation createAccount(
    $userName: String!
    $email: String!
    $position: String!
    $belongTo: String!
    $Rank: String
  ) {
    createAccount(
      userName: $userName
      email: $email
      position: $position
      belongTo: $belongTo
      Rank: $Rank
    )
  }
`;

export const CONFIRM_SECRET = gql`
  mutation confirmSecret($secret: String!, $email: String!) {
    confirmSecret(secret: $secret, email: $email)
  }
`;

export const LOCAL_LOG_IN = gql`
  mutation logUserIn($token: String!) {
    logUserIn(token: $token)
  }
`;
