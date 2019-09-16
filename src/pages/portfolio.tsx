import React from 'react'
import styled, { keyframes } from 'styled-components'

import TwitchLogo from '../images/twitch_logo.png'
import OverLogo from '../images/over_logo.jpg'
import GMULogo from '../images/gmu_logo.png'
import OxfordLogo from '../images/oxford_logo.jpg'
import EngineerBulletImage from '../images/programming-flag.png'
import EducationBulletImage from '../images/pencil-2.png'
import { Shell } from '../components/Layout/Shell'
import Helmet from 'react-helmet'

const StyledPortfolioContainer = styled.div`
  display: grid;
  grid-template: 2 / 2;
  height: 100vh;
`

const StyledPortfolioItem = styled.div<{ gridArea: string }>`
  align-items: center;
  grid-area: ${props => props.gridArea};
  display: flex;
  justify-content: center;
`

const StyledCardHeader = styled.div`
  align-items: center;
  display: flex;
  left: 50%;
  margin-bottom: 16px;
  margin-right: 16px;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: top 0.75s ease-in 50ms, left 0.75s ease-in 50ms, transform 0.75s ease-in 50ms;
  white-space: nowrap;

  &:hover {
    left: 16px;
    top: 16px;
  }
`

const StyledCardBody = styled.div`
  align-items: center;
  align-self: flex-end;
  display: flex;
  opacity: 0;
`

const fadeIn = keyframes`
0% {
  opacity: 0;
}

100% {
  opacity: 1;
}
`

const StyledCard = styled.div`
  background-color: white;
  box-shadow: 0 16px 32px 0 rgba(0, 0, 0, 0.08);
  border: 1px solid #dedede;
  border-radius: 8px;
  display: flex;
  height: 330px;
  justify-content: space-between;
  padding: 16px;
  position: relative;
  width: 648px;

  h2 {
    font-size: 18px;
  }

  &:hover {
    ${StyledCardHeader} {
      left: 16px;
      transform: translate(0, 0);
      top: 16px;
    }

    ${StyledCardBody} {
      animation-delay: 0.5s;
      animation-duration: 2s;
      animation-fill-mode: forwards;
      animation-name: ${fadeIn};
      animation-iteration-count: 1;
    }
  }
`

const StyledCardLogo = styled.img`
  border-radius: 8px;
  height: 75px;
  margin-right: 16px;
  width: 75px;
`

const StyledCardBodyHeader = styled.div`
  align-items: center;
  display: flex;
  flex: 0 0 250px;
  flex-direction: column;
  white-space: nowrap;

  p {
    font-size: 12px;
  }
`

const StyledList = styled.ol<{ listImage: string }>`
  list-style-type: none;

  li {
    font-size: 14px;
    margin-bottom: 12px;
    position: relative;
    padding-left: 24px;
  }

  li::before {
    content: '';
    position: absolute;
    width: 16px;
    height: 100%;
    top: 1px;
    left: 0;
    background-image: url(${props => props.listImage});
    background-size: 16px 16px;
    background-repeat: no-repeat;
    background-position: 0 2px;
  }
`

const StyledDivider = styled.div`
  border: 1px solid #656565;
  margin-bottom: 8px;
  margin-top: 8px;
  width: 32px;
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
              <h1>Over Inc.</h1>
            </StyledCardHeader>
            <StyledCardBody>
              <StyledCardBodyHeader>
                <h2>Web Engineer</h2>
                <StyledDivider />
                <p>April ‘19 - present</p>
              </StyledCardBodyHeader>
              <StyledList listImage={EngineerBulletImage}>
                <li>Led cross-platform initiative to bring Over Teams to parity with our IOS flagship on web.</li>
                <li>Collaborated on cross-functional teams as Frontend SME to design client-side architectures.</li>
                <li>Worked closely with product / design teams to cull and implement data-driven UX decisions.</li>
                <li>Thrived in an autonomous environment to identify user stories and drive feature development.</li>
              </StyledList>
            </StyledCardBody>
          </StyledCard>
        </StyledPortfolioItem>
        <StyledPortfolioItem gridArea={'1 / 2 / 2 / 3'}>
          <StyledCard>
            <StyledCardHeader>
              <StyledCardLogo src={TwitchLogo} />
              <h1>Twitch Inc.</h1>
            </StyledCardHeader>
            <StyledCardBody>
              <StyledCardBodyHeader>
                <h2>Software Engineer</h2>
                <StyledDivider />
                <p>May ‘16 - October ‘17</p>
              </StyledCardBodyHeader>
              <StyledList listImage={EngineerBulletImage}>
                <li>Introduced OIDC protocol to create Twitch's identity federation for over 15+ million DAUs.</li>
                <li>Designed client architecture and asset pipelines to reduce latency for a global audience. </li>
                <li>Collaborated in large-scale technical migration amidst high-impact feature development.</li>
                <li>Led A/B initiatives to optimize user registration, safety, and experience.</li>
              </StyledList>
            </StyledCardBody>
          </StyledCard>
        </StyledPortfolioItem>
        <StyledPortfolioItem gridArea={'2 / 1 / 3 / 2'}>
          <StyledCard>
            <StyledCardHeader>
              <StyledCardLogo src={GMULogo} />
              <h1>George Mason University</h1>
            </StyledCardHeader>
            <StyledCardBody>
              <StyledCardBodyHeader>
                <h2>Philosophy, B.A.</h2>
                <StyledDivider />
                <p>2012</p>
              </StyledCardBodyHeader>
              <StyledList listImage={EducationBulletImage}>
                <li>Graduated Cum Laude with 3.65 GPA.</li>
                <li>Concentrated in Analytic, Ancient and Existential Philosophy.</li>
                <li>Founded and led incipient CrossFit affiliate program for 50+ faculty members and students.</li>
                <li>Administered fitness and nutritional seminars for 75+ Army ROTC cadets.</li>
              </StyledList>
            </StyledCardBody>
          </StyledCard>
        </StyledPortfolioItem>
        <StyledPortfolioItem gridArea={'2 / 2 / 3 / 3'}>
          <StyledCard>
            <StyledCardHeader>
              <StyledCardLogo src={OxfordLogo} />
              <h1>Oxford University</h1>
            </StyledCardHeader>
            <StyledCardBody>
              <StyledCardBodyHeader>
                <h2>Philosophy of Science,</h2>
                <h2>Modern Philosophy</h2>
                <StyledDivider />
                <p>2011</p>
              </StyledCardBodyHeader>
              <StyledList listImage={EducationBulletImage}>
                <li>Engaged in rigorous tutorial system focusing on Philosophy of Science and Modern Philosophy.</li>
                <li>
                  Collaborated with eminent professors to develop cogent rebuttals to highly nuanced areas within
                  Analytic and Continental Philosophy.
                </li>
                <li>Member of St. Catherine’s College and the renowned Oxford Union.</li>
              </StyledList>
            </StyledCardBody>
          </StyledCard>
        </StyledPortfolioItem>
      </StyledPortfolioContainer>
    </Shell>
  )
}

export default Portfolio
