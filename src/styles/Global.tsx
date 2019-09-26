import { createGlobalStyle } from 'styled-components'

import norwester from './fonts/norwester.otf'
import montserratLight from './fonts/Montserrat-Light.otf'
import kollektif from './fonts/Kollektif.ttf'

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
    font-family: 'Montserrat Light';
    font-weight: 400;
    src: url('${montserratLight}');
  }

  @font-face {
    font-display: fallback;
    font-family: 'Kollektif';
    src: url('${kollektif}');
  }

  html { font-size: 24px; }

  body {
    background-color: ${globalTheme.backgroundColor};
    box-sizing: border-box;
    color: #333;
    font-family: ${globalTheme.fontFamilySecondary}, sans-serif;
    font-weight: 400;
    line-height: 1.45;
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
