import React, { PropsWithChildren } from 'react'
import { Normalize } from 'styled-normalize'
import styled from 'styled-components'

import { Theme } from '../../styles/Theme'
import { GlobalStyle } from '../../styles/Global'

const StyledMain = styled.main`
  padding: 16px;
`

export const Container = (props: PropsWithChildren<{}>) => {
  return (
    <Theme>
      <StyledMain>
        <Normalize />
        <GlobalStyle />
        {props.children}
      </StyledMain>
    </Theme>
  )
}
