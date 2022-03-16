import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Hashing from "./pages/Hashing";
import { createGlobalStyle } from "styled-components";
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

    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Hashing />} />
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </>
    );
};

export default App;
