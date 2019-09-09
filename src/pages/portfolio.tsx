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
  padding: 16px;
  width: 328px;

  h2 {
    font-size: 18px;
  }
`

const StyledCardHeader = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`

const StyledCardHeaderInfo = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;

  p {
    font-size: 10px;
  }
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
            <StyledCardHeader>
              <StyledCardLogo src={OverLogo} />
              <StyledCardHeaderInfo>
                <h2>Over Inc.</h2>
                <p>April ‘19 - present</p>
              </StyledCardHeaderInfo>
            </StyledCardHeader>
          </StyledCard>
        </StyledPortfolioItem>
        <StyledPortfolioItem gridArea={'1 / 2 / 2 / 3'}>
          <StyledCard>
            <StyledCardHeader>
              <StyledCardLogo src={TwitchLogo} />
              <StyledCardHeaderInfo>
                <h2>Twitch Inc.</h2>
                <p>May ‘16 - October ‘17</p>
              </StyledCardHeaderInfo>
            </StyledCardHeader>
          </StyledCard>
        </StyledPortfolioItem>
        <StyledPortfolioItem gridArea={'1/ 3 / 2 / 4'}>
          <StyledCard>
            <StyledCardHeader>
              <h2>Your Company...</h2>
            </StyledCardHeader>
          </StyledCard>
        </StyledPortfolioItem>
        <StyledPortfolioItem gridArea={'2 / 1 / 3 / 2'}>
          <StyledCard>
            <StyledCardHeader>
              <StyledCardLogo src={GMULogo} />
              <StyledCardHeaderInfo>
                <h2>George Mason University</h2>
                <p>B.A. Philosophy, 2012</p>
              </StyledCardHeaderInfo>
            </StyledCardHeader>
          </StyledCard>
        </StyledPortfolioItem>
        <StyledPortfolioItem gridArea={'2 / 2 / 3 / 3'}>
          <StyledCard>
            <StyledCardHeader>
              <StyledCardLogo src={OxfordLogo} />
              <StyledCardHeaderInfo>
                <h2>Oxford University</h2>
                <p>Ancient & Analytical Philosophy, 2011</p>
              </StyledCardHeaderInfo>
            </StyledCardHeader>
          </StyledCard>
        </StyledPortfolioItem>
        <StyledPortfolioItem gridArea={'2 / 3 / 3 / 4'}>
          <StyledCard>
            <StyledCardHeader>
              <h2>Current Areas of Interest</h2>
            </StyledCardHeader>
          </StyledCard>
        </StyledPortfolioItem>
      </StyledPortfolioContainer>
    </Shell>
  )
}

export default Portfolio
