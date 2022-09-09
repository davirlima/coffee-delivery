import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${(props) => props.theme.body_bg};
        color: ${(props) => props.theme.base_txt};
        line-height: 1.3;
    }

    body,
    button,
    input,
    textarea{
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
        -webkit-font-smoothing: antialiased;
    }

    h1{
        font-size: 3rem;
        font-family: 'Baloo 2', cursive;
        font-weight: 700;
        -webkit-font-smoothing: antialiased;
        color: ${(props) => props.theme.base_title}
    }

    h2{
        color: ${(props) => props.theme.base_subtitle}
    }

    button{
    outline: 0;
    border: none;
    }
    
    button, 
    a{
        cursor: pointer;
    }

    @media screen and (max-width: 768px) {
        html{
            font-size: 87.5%;
        }
    }
`;
