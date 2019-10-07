import React from 'react'
import styled from 'styled-components'

import Icons from '../components/icons'
import ResumePDF from '../files/Andrew_Deal_Resume_2019.pdf'
import { globalTheme } from '../styles/Theme'

const StyledContainer = styled.div`
  background-color: ${globalTheme.backgroundColor};
  display: grid;
  grid-template: 1fr 2fr 1fr / 1fr 1fr 1fr;
  height: 100vh;
  width: 100vw;

  ul {
    list-style: none;
  }
`

const StyledHeader = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  grid-area: 1 / 1 / 2 / 4;
  margin-left: 32px;
  margin-right: 32px;

  h1 {
    margin-right: 32px;
    white-space: nowrap;
  }
`

const StyledRule = styled.div`
  border: 2px solid ${globalTheme.color};
  width: 100%;
`

const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: 2 / 2 / 3 / 3;
  justify-content: center;
  text-align: center;

  p {
    margin-bottom: 24px;
  }
`

const StyledFooter = styled.footer`
  align-items: center;
  display: flex;
  grid-area: 3 / 1 / 4 / 4;
  justify-content: space-around;
  width: 100%;
`

const Home = () => {
  return (
    <StyledContainer>
      <StyledHeader>
        <h1>Andrew Deal</h1>
        <StyledRule />
      </StyledHeader>

      <StyledBody>
        <p>
          Years of building web applications have taught me that the web is ultimately by and for people. I am fortunate
          to have collaborated with great minds to create world-class products.
        </p>
        <p>
          I strive each day to expand my horizons with the aim of delivering value to others. Above all, I love working
          with like-minded, ambitious people seeking to make a positive impact in the world.
        </p>
        <p>If this sounds like you, please reach out. I‘d love to chat.</p>
      </StyledBody>

      <StyledFooter>
        <a href="mailto:deal.e.andrew@gmail.com" rel="noopener noreferrer">
          <Icons.Email />
        </a>
        <a target="_blank" href="https://twitter.com/a_e_deal" rel="noopener noreferrer">
          <Icons.Twitter />
        </a>
        <a target="_blank" href={ResumePDF} rel="noopener noreferrer">
          <Icons.Resume />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/adeal/" rel="noopener noreferrer">
          <Icons.LinkedIn />
        </a>
        <a target="_blank" href="https://github.com/a-deal" rel="noopener noreferrer">
          <Icons.Github />
        </a>
      </StyledFooter>
    </StyledContainer>
  )
}

export default Home
