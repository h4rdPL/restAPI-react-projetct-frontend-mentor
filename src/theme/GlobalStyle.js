import { createGlobalStyle } from "styled-components";
// import theme from "./Theme";

export const GlobalStyle = createGlobalStyle`

    *, *::before, *::after {
        @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&family=Open+Sans&display=swap');
        font-family:'Nunito Sans' ;

        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body {
    }
`;
