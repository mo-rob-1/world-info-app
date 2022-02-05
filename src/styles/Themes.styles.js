import { createGlobalStyle } from "styled-components";

export const lightMode = {
  body: "hsl(0, 0%, 98%)",
  fontColor: "#000",
  headerBackground: "#fff",
  btnColor: "#000",
};

export const darkMode = {
  body: "hsl(209, 23%, 22%)",
  fontColor: "#fff",
  headerBackground: "hsl(207, 26%, 17%)",
  btnColor: "#fff",
};

export const Theme = createGlobalStyle`
    body {
        background-color: ${(props) => props.theme.body};
    }
    header {
        background-color: ${(props) => props.theme.headerBackground};
    }
    .header__title {
        color: ${(props) => props.theme.fontColor};
    }
    .header__btn {
        color: ${(props) => props.theme.btnColor};
    }
`;
