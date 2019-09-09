import React from 'react'
import styled from 'styled-components'

import { Shell } from '../components/Layout/Shell'
import Helmet from 'react-helmet'

const StyledPortfolioContainer = styled.div`
  display: grid;
  grid-template: 2 / 3;
  height: 100vh;
`

const StyledPortfolioItem = styled.div<{ gridArea: string }>`
  align-items: center;
  grid-area: ${props => props.gridArea};
  display: flex;
  justify-content: center;
`

const Portfolio = () => {
  return (
    <Shell>
      <Helmet>
        <title>Portfolio</title>
      </Helmet>

      <StyledPortfolioContainer>
        <StyledPortfolioItem gridArea={'1 / 1 / 2 / 2'}>Over</StyledPortfolioItem>
        <StyledPortfolioItem gridArea={'1 / 2 / 2 / 3'}>Twitch</StyledPortfolioItem>
        <StyledPortfolioItem gridArea={'1/ 3 / 2 / 4'}>Your company</StyledPortfolioItem>
        <StyledPortfolioItem gridArea={'2 / 1 / 3 / 2'}>George Mason University</StyledPortfolioItem>
        <StyledPortfolioItem gridArea={'2 / 2 / 3 / 3'}>Oxford University</StyledPortfolioItem>
        <StyledPortfolioItem gridArea={'2 / 3 / 3 / 4'}>Current areas of interest</StyledPortfolioItem>
      </StyledPortfolioContainer>
    </Shell>
  )
}

export default Portfolio
