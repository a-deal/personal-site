import React from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'

import { Shell } from '../components/Layout/Shell'
import Icons from '../components/icons'
import AvatarImage from '../images/avatar.jpg'

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
`

const StyledHeaderContent = styled.div`
  width: 320px;

  span {
    font-weight: 600;
    text-transform: uppercase;
  }
`

const StyledHeaderGroup = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;

  h1 {
    align-self: flex-end;
    font-size: 88px;
    opacity: 0.5;
    text-transform: uppercase;
  }
`

const StyledBody = styled.div`
  align-items: center;
  display: flex;
  grid-area: 2 / 1 / 3 / 2;
  justify-content: center;
`

const StyledBodyContent = styled.div`
  margin-left: 32px;
  width: 500px;

  h2 {
    margin-bottom: 8px;
    opacity: 0.75;
    text-transform: uppercase;
  }
`

const StyledFooter = styled.div`
  align-items: flex-end;
  display: flex;
  grid-area: 3 / 1 / 4 / 2;
  justify-content: space-between;
  padding-bottom: 16px;
  padding-right: 16px;
  padding-left: 16px;
`

const StyledFooterContent = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;

  width: 360px;
`

const StyledIconContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
`

const StyledIconGroupLeft = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;

  svg {
    align-self: flex-start;
    margin-bottom: 8px;
  }
`

const StyledIconGroupBottom = styled.div`
  align-items: flex-end;
  display: flex;

  svg {
    align-self: flex-end;
    margin-right: 24px;
  }
`

const StyledAvatar = styled.img`
  border-radius: 144px 32px 32px 144px;
  height: 256px;
  width: 256px;
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
          <StyledHeaderContent>
            <p>
              <span>Value</span> is what I strive for.
            </p>
            <p>
              <span>Impact</span> is what I measure against.
            </p>
            <p>
              <span>Collaboration</span> is what I thrive on.
            </p>
          </StyledHeaderContent>
          <StyledHeaderGroup>
            <h1>Andrew</h1>
            <h1>Deal</h1>
          </StyledHeaderGroup>
        </StyledHeader>
        <StyledBody>
          <StyledAvatar src={AvatarImage} />
          <StyledBodyContent>
            <h2>Technologist</h2>
            <h2>Problem solver</h2>
            <h2>Contributor</h2>
            <p>These are some of the labels I go by.</p>
            <p>At my core, I'm just a human empowering other humans.</p>
          </StyledBodyContent>
        </StyledBody>
        <StyledFooter>
          <StyledIconContainer>
            <StyledIconGroupLeft>
              <a href="mailto:deal.e.andrew@gmail.com">
                <Icons.Email />
              </a>
              <a target="_blank" href="https://twitter.com/a_e_deal">
                <Icons.Twitter />
              </a>
            </StyledIconGroupLeft>
            <StyledIconGroupBottom>
              <a target="_blank" href="https://www.instagram.com/thales_grapes/">
                <Icons.Instagram />
              </a>
              <a target="_blank" href="https://www.linkedin.com/in/adeal/">
                <Icons.LinkedIn />
              </a>
              <a target="_blank" href="https://github.com/a-deal">
                <Icons.Github />
              </a>
            </StyledIconGroupBottom>
          </StyledIconContainer>
          <StyledFooterContent>
            <p>Did something here pique your interest?</p>
            <p>Please reach out, I'd love to connect</p>
          </StyledFooterContent>
        </StyledFooter>
      </StyledContainer>
    </Shell>
  )
}

export default Index
