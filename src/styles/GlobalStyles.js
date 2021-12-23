import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  :root{
    --color-azul: #619ee5;
    --color-verde: #4d8f00;
    --color-blanco: #fff;
    --color-gris: #dfdfdf;
    --color-gris-2: #b5b5b5;
    --color-gris-3: #adadad;
  }
  
  *,
  *::before,
  *::after{
    box-sizing: border-box;
  } 

  body{
    margin: 0;
    overflow-x: hidden;
    font-family: sans-serif;
    padding-bottom: 50px;
  }
  

`;
