"use client";
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  html {
    background: ${({ theme }) => theme.colors.background};
    color-scheme: dark;
    scroll-padding-top: 8rem;
  }

  body {
    min-height: 100vh;
    overflow-x: hidden;
    background:
      radial-gradient(circle at top, rgba(211, 161, 108, 0.12), transparent 30%),
      radial-gradient(circle at 85% 15%, rgba(77, 103, 154, 0.14), transparent 25%),
      linear-gradient(180deg, #05070b 0%, ${({ theme }) => theme.colors.background} 45%, #05070b 100%);
    color: ${({ theme }) => theme.colors.textMuted};
    -webkit-font-smoothing: antialiased;
    font-family: var(--font-sans), sans-serif;
    line-height: 1.5;
  }

  body::before {
    content: '';
    position: fixed;
    inset: 0;
    pointer-events: none;
    background-image: linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
    background-size: 120px 120px;
    mask-image: radial-gradient(circle at center, rgba(0, 0, 0, 0.5), transparent 85%);
    opacity: 0.18;
    z-index: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    max-width: 100%;
    display: block;
  }

  button,
  input,
  textarea {
    font: inherit;
  }

  button {
    cursor: pointer;
  }

  code,
  pre,
  .mono {
    font-family: var(--font-mono), monospace;
  }

  :focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primaryStrong};
    outline-offset: 3px;
  }

  ::selection {
    background: ${({ theme }) => theme.colors.primaryMuted};
    color: ${({ theme }) => theme.colors.text};
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.background};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.surfaceAlt};
    border: 2px solid ${({ theme }) => theme.colors.background};
    border-radius: 999px;
  }

  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`
