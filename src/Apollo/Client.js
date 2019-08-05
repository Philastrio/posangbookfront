import ApolloClient, { HttpLink } from "apollo-boost";
import { defaults, resolvers } from "./LocalState";

export default new ApolloClient({
  link: new HttpLink({
    uri: "http://localhost:4000",
    headers: {
      authorization: localStorage.getItem("token"),
      "client-name": "PosangBook [web]",
      "client-version": "1.0.0"
    }
  }),
  clientState: {
    defaults,
    resolvers
  }
});
