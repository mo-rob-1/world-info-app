import { createGlobalStyle } from "styled-components";

export const lightMode = {
  body: "hsl(0, 0%, 98%)",
  cardBgColor: "#fff",
  fontColor: "#000",
  headerBackground: "#fff",
  btnColor: "#000",
  infoWrapperBackground: "#fff",
  infoWrapperText: "#000",
  inputContainerBackground: "#fff",
  inputBackground: "#fff",
  inputTextColor: "hsl(0, 0%, 52%)",
  selectBackground: "#fff",
  selectTextColor: "#000",
  placeholderTextColor: "hsl(0, 0%, 52%)",
  searchIconColor: "hsl(0, 0%, 52%)",
  countryPgTextColor: "#000",
  buttonBgColor: "#fff",
  buttonTextColor: "#000",
  backBtnBgColor: "#fff",
  backBtnTextColor: "#000",
  footerTextColor: "#000",
};

export const darkMode = {
  body: "hsl(207, 26%, 17%)",
  cardBgColor: "hsl(209, 23%, 22%)",
  fontColor: "#fff",
  headerBackground: "hsl(209, 23%, 22%)",
  btnColor: "#fff",
  infoWrapperBackground: "hsl(209, 23%, 22%)",
  infoWrapperText: "#fff",
  inputContainerBackground: "hsl(209, 23%, 22%)",
  inputBackground: "hsl(209, 23%, 22%)",
  inputTextColor: "#fff",
  selectBackground: "hsl(209, 23%, 22%)",
  selectTextColor: "#fff",
  placeholderTextColor: "#fff",
  searchIconColor: "#fff",
  countryPgTextColor: "#fff",
  buttonBgColor: "hsl(209, 23%, 22%)",
  buttonTextColor: "#fff",
  backBtnBgColor: "hsl(209, 23%, 22%)",
  backBtnTextColor: "#fff",
  footerTextColor: "#fff",
};

export const Theme = createGlobalStyle`
    body {
        background-color: ${(props) => props.theme.body};
    }
    header {
        background-color: ${(props) => props.theme.headerBackground};
    }
    input {
        background-color: ${(props) => props.theme.inputBackground};
        color: ${(props) => props.theme.inputTextColor};
    }
    select {
        background-color: ${(props) => props.theme.selectBackground};
        color: ${(props) => props.theme.selectTextColor};
    }
    footer, small a {
        color: ${(props) => props.theme.footerTextColor};
    }
    .card {
        background-color: ${(props) => props.theme.cardBgColor};
    }
    .header__title {
        color: ${(props) => props.theme.fontColor};
    }
    .header__btn {
        color: ${(props) => props.theme.btnColor};
    }
    .card__info-wrapper {
        background-color: ${(props) => props.theme.infoWrapperBackground};
        color: ${(props) => props.theme.infoWrapperText};
    }
    .input-container {
        background-color: ${(props) => props.theme.inputContainerBackground};
    }

    ::placeholder {
        color: ${(props) => props.theme.placeholderTextColor};
    }
    ::-ms-input-placeholder {
        color: ${(props) => props.theme.placeholderTextColor};
    }
    .search-icon {
        color: ${(props) => props.theme.searchIconColor};
    }
    .country-pg__col-2 {
        color: ${(props) => props.theme.countryPgTextColor};
    }
    .country-pg__borders button {
        background-color: ${(props) => props.theme.buttonBgColor};
        color: ${(props) => props.theme.buttonTextColor};
    }
    .country-pg__back-btn-container {
        background-color: ${(props) => props.theme.backBtnBgColor};
    }
    .country-pg__back-btn {
        color: ${(props) => props.theme.backBtnTextColor};
    }
    .borders-none {
        background-color: ${(props) => props.theme.buttonBgColor};
        color: ${(props) => props.theme.buttonTextColor};
    }
    .loading {
        color: ${(props) => props.theme.fontColor};
    }
`;
