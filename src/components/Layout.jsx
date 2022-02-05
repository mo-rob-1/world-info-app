import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { GlobalStyles, Container } from "../styles/Layout.styles";
import { ThemeProvider } from "styled-components";
import { lightMode, darkMode, Theme } from "../styles/Themes.styles";

function Layout({ children }) {
  const [theme, setTheme] = useState("light");

  const themeToggle = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightMode : darkMode}>
        <GlobalStyles />
        <Theme />
        <Header themeToggle={themeToggle} />
        <Container>{children}</Container>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default Layout;
