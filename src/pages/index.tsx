import React from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
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
  grid-area: 1 / 2 / 6 / 6;
  flex-direction: column;
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

  p {
    margin-bottom: 32px;
  }
`

const StyledIconGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
`

const StyledLeftContent = styled.div`
  grid-area: 2 / 1 / 5 / 2;
  padding-left: 32px;
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
            <p>What I’ve done</p>
            <p>What I’m into</p>
          </StyledRightContentBody>
        </StyledRightContent>
      </StyledContainer>
    </Shell>
  )
}

export default Index
