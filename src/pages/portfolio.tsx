import React from 'react'
import styled from 'styled-components'

import TwitchLogo from '../images/twitch_logo.png'
import OverLogo from '../images/over_logo.jpg'
import GMULogo from '../images/gmu_logo.png'
import OxfordLogo from '../images/oxford_logo.jpg'
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

const StyledCard = styled.div`
  background-color: white;
  box-shadow: 0 16px 32px 0 rgba(0, 0, 0, 0.08);
  border: 1px solid #dedede;
  border-radius: 8px;
  height: 320px;
  padding: 8px;
  width: 280px;
`

const StyledCardLogo = styled.img`
  border-radius: 8px;
  height: 50px;
  width: 50px;
`

const Portfolio = () => {
  return (
    <Shell>
      <Helmet>
        <title>Portfolio</title>
      </Helmet>

      <StyledPortfolioContainer>
        <StyledPortfolioItem gridArea={'1 / 1 / 2 / 2'}>
          <StyledCard>
            <StyledCardLogo src={OverLogo} />
          </StyledCard>
        </StyledPortfolioItem>
        <StyledPortfolioItem gridArea={'1 / 2 / 2 / 3'}>
          <StyledCard>
            <StyledCardLogo src={TwitchLogo} />
          </StyledCard>
        </StyledPortfolioItem>
        <StyledPortfolioItem gridArea={'1/ 3 / 2 / 4'}>
          <StyledCard>Your Company</StyledCard>
        </StyledPortfolioItem>
        <StyledPortfolioItem gridArea={'2 / 1 / 3 / 2'}>
          <StyledCard>
            <StyledCardLogo src={GMULogo} />
          </StyledCard>
        </StyledPortfolioItem>
        <StyledPortfolioItem gridArea={'2 / 2 / 3 / 3'}>
          <StyledCard>
            <StyledCardLogo src={OxfordLogo} />
          </StyledCard>
        </StyledPortfolioItem>
        <StyledPortfolioItem gridArea={'2 / 3 / 3 / 4'}>
          <StyledCard>Current Areas of Interest</StyledCard>
        </StyledPortfolioItem>
      </StyledPortfolioContainer>
    </Shell>
  )
}

export default Portfolio
