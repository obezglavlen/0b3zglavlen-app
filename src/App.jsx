import React from "react";
import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Flex, Nav, LinkAd } from "./components";
import { Hashing } from "./pages";
import Themes from "./themes.config";

const GlobalStyle = createGlobalStyle`
*, *::after, *::before {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Ubuntu", sans-serif;
}

html, body, #root {
    background-color: ${(props) => props.theme.colors.primary};
    height: 100%;
}
`;

const App = () => {
  const [theme, setTheme] = useState(Themes.dark);
  const Links = () => (
    <LinkAd>
      <LinkAd.Header color="orange">Social Links</LinkAd.Header>
      <LinkAd.Item
        color="#F0F6FC"
        href="https://github.com/obezglavlen"
        img="https://cdn-icons-png.flaticon.com/512/25/25231.png"
        bg="white"
        radius="50%"
      >
        Github
      </LinkAd.Item>
      <LinkAd.Item
        color="#2aa2de"
        href="https://t.me/obezglavlen"
        img="https://hashtelegraph.com/wp-content/uploads/2018/01/Logo1.png"
      >
        Telegram
      </LinkAd.Item>
      <LinkAd.Item
        color="#b1361e"
        href="https://www.codewars.com/users/obezglavlen"
        img="https://docs.codewars.com/logo.svg"
      >
        Codewars
      </LinkAd.Item>
    </LinkAd>
  );

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Flex height="100%">
            <Nav>
              <Nav.List center>
                <Nav.Item to="/hash">Hashing</Nav.Item>
              </Nav.List>
            </Nav>
            <Routes>
              <Route path="/" element={<Navigate to="/hash" />} />
              <Route path="/hash" element={<Hashing />} />
            </Routes>
          </Flex>
        </BrowserRouter>
        <Links />
      </ThemeProvider>
    </>
  );
};

export default App;
