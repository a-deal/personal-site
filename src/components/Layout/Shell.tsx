import React, { PropsWithChildren } from 'react'
import { Normalize } from 'styled-normalize'
import { Helmet } from 'react-helmet'

import norwester from './fonts/Norwester.otf'
import comfortaa from './fonts/Comfortaa_Regular.otf'
import { Theme } from '../../styles/Theme'
import { GlobalStyle } from '../../styles/Global'

export const Shell = (props: PropsWithChildren<{}>) => {
  return (
    <>
      <Helmet>
        <link rel="preload" as="font" href={norwester} type="font/otf" crossOrigin="anonymous" />
        <link rel="preload" as="font" href={comfortaa} type="font/otf" crossOrigin="anonymous" />
      </Helmet>
      <Theme>
        <main>
          <Normalize />
          <GlobalStyle />
          {props.children}
        </main>
      </Theme>
    </>
  )
}
