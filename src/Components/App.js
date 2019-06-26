import React from "react";
import { ThemeProvider } from "styled-components";
import { gql } from "apollo-boost";
import GlobalStyles from "../Styles/GlobalStyles";
import Theme from "../Styles/Theme";
import Routes from "./Routes";
import { HashRouter as Router } from "react-router-dom";
import { useQuery } from "react-apollo-hooks";
import styled from "styled-components";
import Footer from "./Footer";
import SearchPost from "../Routes/SearchPost";
import Auth from "../Routes/Auth";
import Header from "./Header";
import SearchResult from "../Routes/SearchResult";

const QUERY = gql`
  {
    isLoggedIn @client
  }
`;

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: ${props => props.theme.maxWidth};
  width: 100%;
`;

export default () => {
  const {
    data: { isLoggedIn }
  } = useQuery(QUERY);

  return (
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyles />
        <Router>
          <Wrapper>
            <Header />
            <Routes>
              <SearchResult />
            </Routes>

            <Footer />
          </Wrapper>
        </Router>
      </>
    </ThemeProvider>
  );
};
