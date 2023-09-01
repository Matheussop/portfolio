"use client";
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  :focus {
    outline: none;
  } 

  body {
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.gray};
    -webkit-font-smoothing: antialiased;
 
  }

  button {
    cursor: pointer;
  }

  span {
    color: ${(props) => props.theme.colors.primary};
  }

`