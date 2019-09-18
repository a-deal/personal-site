import React from 'react'
import { Helmet } from 'react-helmet'
import styled, { keyframes } from 'styled-components'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import { Shell } from '../components/Layout/Shell'
import Icons from '../components/icons'
import AvatarImage from '../images/avatar.jpg'
import TransitionImage from '../images/transition_quote.png'

const StyledContainer = styled.div`
  display: grid;
  grid-template: 1fr 1fr 1fr 1fr 1fr / 1fr 1fr 1fr 1fr 1fr 1fr;
  height: 100vh;

  ul {
    list-style: none;
  }
`
const StyledMiddleContent = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  grid-area: 1 / 2 / 6 / 6;
  justify-content: center;
  white-space: pre;

  h1 {
    margin-bottom: 48px;
  }
`

const StyledAvatar = styled.img`
  border-radius: 144px;
  height: 256px;
  margin-bottom: 32px;
  width: 256px;
`
const StyledMiddleContentHeader = styled.div`
  display: flex;
  margin-bottom: 24px;
`

const StyledRightContent = styled.div`
  align-items: center;
  display: flex;
  grid-area: 1 / 6 / 6 / 7;
  justify-content: space-around;
`

const StyledRightContentBody = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledIconGroup = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-around;
`

const StyledLeftContent = styled.div`
  grid-area: 2 / 1 / 5 / 2;
  padding-left: 32px;
`

const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(204, 169, 44, 0.4);
  }

  70% {
    box-shadow: 0 0 0 10px rgba(204, 169, 44, 0);
  }

  100% {
    box-shadow: 0 0 0 0 rgba(204, 169, 44, 0);
  }
`

const StyledPulse = styled.span`
  animation: ${pulse} 2s infinite;
  background: #cca92c;
  border-radius: 50%;
  box-shadow: 0 0 0 rgba(204, 169, 44, 0.4);
  cursor: pointer;
  display: block;
  height: 18px;
  margin-right: 12px;
  width: 18px;

  &:hover {
    animation: none;
  }
`

const StyledTextContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  line-height: 1.5em;
  margin-bottom: 16px;
  white-space: preserve;
`

const Index = () => {
  return (
    <Shell>
      <Helmet>
        <title>Welcome, ברוך הבא, ようこそ, Bienvenido</title>
      </Helmet>
      <StyledContainer>
        <StyledLeftContent>
          <StyledIconGroup>
            <a href="mailto:deal.e.andrew@gmail.com" rel="noopener noreferrer">
              <Icons.Email />
            </a>
            <a target="_blank" href="https://twitter.com/a_e_deal" rel="noopener noreferrer">
              <Icons.Twitter />
            </a>
            <a target="_blank" href="https://www.instagram.com/thales_grapes/" rel="noopener noreferrer">
              <Icons.Instagram />
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/adeal/" rel="noopener noreferrer">
              <Icons.LinkedIn />
            </a>
            <a target="_blank" href="https://github.com/a-deal" rel="noopener noreferrer">
              <Icons.Github />
            </a>
          </StyledIconGroup>
        </StyledLeftContent>

        <StyledMiddleContent>
          <h1>Hi, I'm Andrew</h1>
          <StyledAvatar src={AvatarImage} />
          <StyledMiddleContentHeader>
            <h4>Technologist · </h4>
            <h4>Problem solver · </h4>
            <h4>Contributor</h4>
          </StyledMiddleContentHeader>
          <p>These are some of the labels I go by.</p>
          <p>At my core, I'm just a human empowering other humans.</p>
        </StyledMiddleContent>
        <StyledRightContent>
          <StyledRightContentBody>
            <StyledTextContainer>
              <AniLink
                cover
                bg={`
                  url(${TransitionImage})
                  center / cover
                  no-repeat
                  fixed
                `}
                direction="top"
                to="/portfolio/"
                duration={4}
              >
                <StyledPulse />
              </AniLink>
              <p>What I've Done</p>
            </StyledTextContainer>

            <StyledTextContainer>
              <p>What I’m into</p>
            </StyledTextContainer>
          </StyledRightContentBody>
        </StyledRightContent>
      </StyledContainer>
    </Shell>
  )
}

export default Index
