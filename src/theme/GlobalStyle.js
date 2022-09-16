import { createGlobalStyle } from "styled-components";
// import theme from "./Theme";

export default createGlobalStyle`
       @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&family=Open+Sans&display=swap');
    *, *::before, *::after {
 
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body {
        font-family:'Nunito Sans', sans-serif;
        background: ${({ theme }) => theme.background} ;

    }
    h2 {
        margin: 0;
    }

    a {
        color: ${({ theme }) => theme.text};
        text-decoration: none;
        width: fit-content;
    }
    ul {
        list-style: none;
    }
`;
