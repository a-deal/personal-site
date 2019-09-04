import React, { PropsWithChildren } from 'react'
import { Normalize } from 'styled-normalize'
import styled from 'styled-components'

import { GlobalStyle } from '../../styles/Global'

const StyledMain = styled.main`
  padding: 16px;
`

export const Container = (props: PropsWithChildren<{}>) => {
  return (
    <StyledMain>
      <Normalize />
      <GlobalStyle />
      {props.children}
    </StyledMain>
  )
}
