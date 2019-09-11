import React from 'react'
import styled from 'styled-components'

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
  height: 352px;
  padding: 16px;
  width: 376px;

  h2 {
    font-size: 18px;
  }
`

const StyledCardHeader = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`

const StyledCardLogo = styled.img`
  border-radius: 8px;
  height: 50px;
  width: 50px;
`

const StyledCardHeaderInfo = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;

  p {
    font-size: 10px;
  }
`

const StyledDivider = styled.div`
  position: relative;
  height: 1px;
  margin-top: 16px;
  margin-bottom: 12px;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 5%;
    right: 5%;
    width: 90%;
    height: 1px;
    background-image: linear-gradient(to right, transparent, rgb(101, 101, 101), transparent);
  }
`

const StyledCardBody = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    align-self: center;
    margin-bottom: 12px;
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
            <StyledDivider />
            <StyledCardBody>
              <h2>Web Engineer</h2>
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
              <StyledCardHeaderInfo>
                <h2>Twitch Inc.</h2>
                <p>May ‘16 - October ‘17</p>
              </StyledCardHeaderInfo>
            </StyledCardHeader>
            <StyledDivider />
            <StyledCardBody>
              <h2>Software Engineer</h2>
              <StyledList listImage={EngineerBulletImage}>
                <li>Introduced OIDC protocol to create Twitch's identity federation for over 15+ million DAUs.</li>
                <li>Designed client architecture and asset pipelines to reduce latency for a global audience. </li>
                <li>Collaborated in large-scale technical migration amidst high-impact feature development.</li>
                <li>Led A/B initiatives to optimize user registration, safety, and experience.</li>
              </StyledList>
            </StyledCardBody>
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
            <StyledDivider />
            <StyledList listImage={EducationBulletImage}>
              <li>Graduated Cum Laude with 3.65 GPA.</li>
              <li>Concentrated in Analytic, Ancient and Existential Philosophy.</li>
              <li>Founded and led incipient CrossFit affiliate program for 50+ faculty members and students.</li>
              <li>Administered fitness and nutritional seminars for 75+ Army ROTC cadets.</li>
            </StyledList>
          </StyledCard>
        </StyledPortfolioItem>
        <StyledPortfolioItem gridArea={'2 / 2 / 3 / 3'}>
          <StyledCard>
            <StyledCardHeader>
              <StyledCardLogo src={OxfordLogo} />
              <StyledCardHeaderInfo>
                <h2>Oxford University</h2>
                <p>Exchange Student, 2011</p>
              </StyledCardHeaderInfo>
            </StyledCardHeader>
            <StyledDivider />
            <StyledList listImage={EducationBulletImage}>
              <li>Engaged in rigorous tutorial system focusing on Philosophy of Science and Modern Philosophy.</li>
              <li>Developed analytical and critical writing skills under fast-paced deadlines.</li>
              <li>
                Collaborated with eminent professors to develop cogent rebuttals to highly nuanced areas within Analytic
                and Continental Philosophy.
              </li>
              <li>Member of St. Catherine’s College and the renowned Oxford Union.</li>
            </StyledList>
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
