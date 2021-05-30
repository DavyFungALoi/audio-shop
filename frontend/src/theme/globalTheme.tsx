import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    color: ${(props) => (props.whiteColor ? "white" : "black")};
    font-family: ${props => props.theme.fontFamily};
  }
`;

/*import { injectGlobal } from "styled-components";
injectGlobal`
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap');
  body {
    padding: 0;
    margin: 0;
    font-family: Manrope, sans-serif;
  }
`;

export const theme = {
  primary: ‘#6e27c5’
}
*/
