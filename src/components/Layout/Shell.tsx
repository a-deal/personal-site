import React, { PropsWithChildren } from 'react'
import { Normalize } from 'styled-normalize'

import { Theme } from '../../styles/Theme'
import { GlobalStyle } from '../../styles/Global'

export const Shell = (props: PropsWithChildren<{}>) => {
  return (
    <Theme>
      <div>
        <Normalize />
        <GlobalStyle />
        {props.children}
      </div>
    </Theme>
  )
}
