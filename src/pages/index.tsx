import React from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'

import { Shell } from '../components/Layout/Shell'

const StyledContainer = styled.div`
  display: grid;
  grid-template: 3 / 1;
  height: 100vh;

  ul {
    list-style: none;
  }
`

const StyledHeader = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  justify-content: space-between;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;

  h1 {
    align-self: center;
    text-transform: uppercase;
    opacity: 0.5;
  }
`

const StyledHeaderProfile = styled.div`
  width: 360px;
`

const StyledBody = styled.div`
  align-items: center;
  display: flex;
  grid-area: 2 / 1 / 3 / 2;
  justify-content: center;
`

const StyledBodyContent = styled.div`
  width: 320px;

  span {
    font-style: italic;
    text-transform: uppercase;
  }
`

const StyledFooter = styled.div`
  align-items: flex-end;
  display: flex;
  grid-area: 3 / 1 / 4 / 2;
  justify-content: flex-end;
`

const StyledFooterContent = styled.div`
  width: 320px;
  padding-bottom: 16px;
  padding-right: 16px;
`

const Index = () => {
  return (
    <Shell>
      <Helmet>
        {/* TODO -> Vet what to put in head element  */}
        <title>Welcome, ברוך הבא, ようこそ, Bienvenido</title>
      </Helmet>
      <StyledContainer>
        <StyledHeader>
          <StyledHeaderProfile>
            Welcome! Engineer, problem solver, thinker are just some of the labels I go by. At my core, I'm just a human
            enthused with bringing value to others.
          </StyledHeaderProfile>
          <h1>Andrew Deal</h1>
        </StyledHeader>
        <StyledBody>
          <StyledBodyContent>
            <p>
              <span>Value</span> is what I strive for.
            </p>
            <p>
              <span>Impact</span> is what I measure against.
            </p>
            <p>
              <span>Collaboration</span> is what I thrive on.
            </p>
          </StyledBodyContent>
        </StyledBody>
        <StyledFooter>
          <StyledFooterContent>
            Did something here pique your interest? Please reach out, I'd love to connect
          </StyledFooterContent>
        </StyledFooter>
      </StyledContainer>
    </Shell>
  )
}

export default Index
