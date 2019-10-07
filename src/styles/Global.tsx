import { createGlobalStyle } from 'styled-components'

import norwester from './fonts/Norwester.otf'
import comfortaa from './fonts/Comfortaa_Regular.otf'
import { globalTheme } from './Theme'
import { reset } from './utils/reset'

export const GlobalStyle = createGlobalStyle`
  ${reset}

  @font-face {
    font-display: fallback;
    font-family: 'Norwester';
    font-weight: 400;
    src: url('${norwester}');
  }

  @font-face {
    font-display: fallback;
    font-family: 'Comfortaa Regular';
    font-weight: 400;
    src: url('${comfortaa}');
  }

  html { font-size: 24px; }

  body {
    background-color: ${globalTheme.backgroundColor};
    box-sizing: border-box;
    color: ${globalTheme.color};
    font-family: ${globalTheme.fontFamilySecondary}, sans-serif;
    font-weight: 400;
    line-height: 2;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-family: ${globalTheme.fontFamilyPrimary};
    font-weight: 400;
    line-height: 1.15;
  }

  h1 {
    font-size: 4.209em;
    margin-top: 0;
  }

  h2 { font-size: 3.157em; }
  h3 { font-size: 2.369em; }
  h4 { font-size: 1.777em; }
  h5 { font-size: 1.333em; }

  small,
  .text_small { font-size: 0.75em; }

  button { 
    background-color: inherit;
    border: none;
    cursor: pointer;
  }
`
