import React, { PropsWithChildren } from 'react'
import { Normalize } from 'styled-normalize'

import { Theme } from '../../styles/Theme'
import { GlobalStyle } from '../../styles/Global'

export const Shell = (props: PropsWithChildren<{}>) => {
  return (
    <Theme>
      <main>
        <Normalize />
        <GlobalStyle />
        {props.children}
      </main>
    </Theme>
  )
}
