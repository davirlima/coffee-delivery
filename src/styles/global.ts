import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${(props) => props.theme.body_bg};
        color: ${(props) => props.theme.base_txt}
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

    h1,
    h2,
    h3,
    h4,
    h5,
    h6{
        font-family: 'Baloo 2', cursive;
        font-weight: 700;
        -webkit-font-smoothing: antialiased;
    }

    @media screen and (max-width: 768px) {
        html{
            font-size: 87.5%;
        }
    }
`;
