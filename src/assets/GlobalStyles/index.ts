import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        padding:0;
        margin: 0;
        font-family: 'Roboto', sans-serif;
    }
    body{
        background: #F70054;
    }
    footer {
        text-align: center;
        padding: 22px;
        border-top: 1px solid lightgrey
    }
`