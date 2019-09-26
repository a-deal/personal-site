import React from 'react'
import styled, { keyframes } from 'styled-components'

import TwitchLogo from '../images/twitch_logo.png'
import OverLogo from '../images/over_logo.jpg'
import GMULogo from '../images/gmu_logo.png'
import OxfordLogo from '../images/oxford_logo.jpg'
import EngineerBulletImage from '../images/programming-flag.png'
import EducationBulletImage from '../images/pencil-2.png'
import { globalTheme } from '../styles/Theme'
import HomeImage from '../images/home.png'
import { useSpring } from 'react-spring'

const StyledPortfolioContainer = styled.div`
  align-items: center;
  background-color: ${globalTheme.backgroundColor};
  display: grid;
  grid-template: calc(50% - 42px) 84px calc(50% - 42px) / 1fr 84px 1fr;
  height: calc(100%);
  justify-items: center;
  overflow-x: scroll;
`

const StyledPortfolioItem = styled.div<{ gridArea: string }>`
  align-items: center;
  display: flex;
  grid-area: ${props => props.gridArea};
  height: inherit;
  justify-content: center;
  padding: 16px;
`

const StyledCardHeader = styled.div`
  align-items: center;
  display: flex;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: top 0.75s ease-in 100ms, left 0.75s ease-in 100ms, transform 0.75s ease-in 100ms;
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
  max-height: 75%;
  opacity: 0;
  overflow: scroll;
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
  border: 1px solid #dedede;
  box-shadow: 0 16px 32px 0 rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  display: flex;
  height: inherit;
  padding: 16px;
  position: relative;
  overflow-x: scroll;

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
  margin-right: 16px;
  white-space: nowrap;
`

const StyledListContainer = styled.div`
  margin: auto;
`

const StyledList = styled.ol<{ listImage: string }>`
  list-style-type: none;

  li {
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

const StyledHomeImageContainer = styled.div`
  align-items: center;
  background-color: white;
  border: 1px solid #dedede;
  border-radius: 8px;
  box-shadow: 0 16px 32px 0 rgba(0, 0, 0, 0.08);
  cursor: pointer;
  display: flex;
  grid-area: 2 / 2 / 3 / 3;
  height: 50px;
  justify-content: center;
  width: 50px;
`

const Portfolio = (props: { onTransition: (transitionProps: any) => void }) => {
  const transitionProps = useSpring({
    to: [{ transform: `translateZ(-50vw) rotateY(-270deg)` }, { transform: `translateZ(-50vw) rotateY(-360deg)` }],
    from: { transform: `translateZ(-50vw) rotateY(180deg)` },
    config: { mass: 50, tension: 25, friction: 50 },
    delay: 100,
  })

  const handleTransitionToHome = () => {
    props.onTransition(transitionProps)
  }

  return (
    <StyledPortfolioContainer>
      <StyledHomeImageContainer onClick={handleTransitionToHome}>
        <img src={HomeImage} />
      </StyledHomeImageContainer>
      <StyledPortfolioItem gridArea={'1 / 1 / 2 / 2'}>
        <StyledCard>
          <StyledCardHeader>
            <StyledCardLogo src={OverLogo} />
            <h3>Over Inc.</h3>
          </StyledCardHeader>
          <StyledCardBody>
            <StyledCardBodyHeader>
              <h5>Web Engineer</h5>
              <StyledDivider />
              <p>April ‘19 - present</p>
            </StyledCardBodyHeader>
            <StyledListContainer>
              <StyledList listImage={EngineerBulletImage}>
                <li>Led cross-platform initiative to bring Over Teams to parity with our IOS flagship on web.</li>
                <li>Collaborated on cross-functional teams as Frontend SME to design client-side architectures.</li>
                <li>Worked closely with product / design teams to cull and implement data-driven UX decisions.</li>
                <li>Thrived in an autonomous environment to identify user stories and drive feature development.</li>
              </StyledList>
            </StyledListContainer>
          </StyledCardBody>
        </StyledCard>
      </StyledPortfolioItem>
      <StyledPortfolioItem gridArea={'1 / 3 / 2 / 4'}>
        <StyledCard>
          <StyledCardHeader>
            <StyledCardLogo src={TwitchLogo} />
            <h3>Twitch Inc.</h3>
          </StyledCardHeader>
          <StyledCardBody>
            <StyledCardBodyHeader>
              <h5>Software Engineer</h5>
              <StyledDivider />
              <p>May ‘16 - October ‘17</p>
            </StyledCardBodyHeader>
            <StyledListContainer>
              <StyledList listImage={EngineerBulletImage}>
                <li>Introduced OIDC protocol to create Twitch's identity federation for over 15+ million DAUs.</li>
                <li>Designed client architecture and asset pipelines to reduce latency for a global audience. </li>
                <li>Collaborated in large-scale technical migration amidst high-impact feature development.</li>
                <li>Led A/B initiatives to optimize user registration, safety, and experience.</li>
              </StyledList>
            </StyledListContainer>
          </StyledCardBody>
        </StyledCard>
      </StyledPortfolioItem>
      <StyledPortfolioItem gridArea={'3 / 1 / 4 / 2'}>
        <StyledCard>
          <StyledCardHeader>
            <StyledCardLogo src={GMULogo} />
            <h3>George Mason University</h3>
          </StyledCardHeader>
          <StyledCardBody>
            <StyledCardBodyHeader>
              <h5>Philosophy, B.A.</h5>
              <StyledDivider />
              <p>2012</p>
            </StyledCardBodyHeader>
            <StyledListContainer>
              <StyledList listImage={EducationBulletImage}>
                <li>Graduated Cum Laude with 3.65 GPA.</li>
                <li>Concentrated in Analytic, Ancient and Existential Philosophy.</li>
                <li>Founded and led incipient CrossFit affiliate program for 50+ faculty members and students.</li>
                <li>Administered fitness and nutritional seminars for 75+ Army ROTC cadets.</li>
              </StyledList>
            </StyledListContainer>
          </StyledCardBody>
        </StyledCard>
      </StyledPortfolioItem>
      <StyledPortfolioItem gridArea={'3 / 3 / 4 / 4'}>
        <StyledCard>
          <StyledCardHeader>
            <StyledCardLogo src={OxfordLogo} />
            <h3>Oxford University</h3>
          </StyledCardHeader>
          <StyledCardBody>
            <StyledCardBodyHeader>
              <h5>Philosophy of Science,</h5>
              <h5>Modern Philosophy</h5>
              <StyledDivider />
              <p>2011</p>
            </StyledCardBodyHeader>
            <StyledListContainer>
              <StyledList listImage={EducationBulletImage}>
                <li>
                  Thrived in rigorous tutorial system and under fast-paced deadlines to develop, defend, and progress
                  well-thought positions and rhetoric.
                </li>
                <li>
                  Collaborated with eminent professors to hone critical thinking skills within highly nuanced areas of
                  philosophical enquiries.
                </li>
                <li>Member of St. Catherine’s College and the renowned Oxford Union.</li>
              </StyledList>
            </StyledListContainer>
          </StyledCardBody>
        </StyledCard>
      </StyledPortfolioItem>
    </StyledPortfolioContainer>
  )
}

export default Portfolio
