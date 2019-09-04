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
    font-weight: 100;
    src: url('${kollektif}');
  }

  html {
    background-color: ${globalTheme.backgroundColor};
    box-sizing: border-box;
  }

  body {
    color: ${globalTheme.color};
    font-family: ${globalTheme.fontFamilyPrimary}, sans-serif;
    line-height: 1.5;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 700;
  }

  a, p {
    font-family: ${globalTheme.fontFamilySecondary};
  }
`
