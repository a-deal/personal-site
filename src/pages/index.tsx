import React from 'react'
import { Helmet } from 'react-helmet'
import styled, { keyframes } from 'styled-components'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { useSpring, useTransition, animated, config } from 'react-spring'

import { Shell } from '../components/Layout/Shell'
import Icons from '../components/icons'
import AvatarImage from '../images/avatar.jpg'
import TransitionImage from '../images/transition_quote.png'

const StyledContainer = styled(animated.div)`
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

const StyledAvatar = styled(animated.img)`
  border-radius: 64px;
  height: 256px;
  margin-bottom: 32px;
  width: 256px;
`
const StyleMiddleContentSubHeader = styled(animated.div)`
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

const StyledMiddleContentHeader = styled.div`
  display: flex;
  justify: center;
`

const Index = () => {
  const containerProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: config.molasses,
  })

  const calc = (x: number, y: number) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
  const trans = (x: number, y: number, s: number) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
  const [avatarProps, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))

  const mainHeaderItems = [
    { text: 'H', key: 1 },
    { text: 'i', key: 2 },
    { text: ' ', key: 3 },
    { text: `I'm`, key: 4 },
    { text: ` `, key: 5 },
    { text: 'A', key: 6 },
    { text: 'n', key: 7 },
    { text: 'd', key: 8 },
    { text: 'r', key: 9 },
    { text: 'e', key: 10 },
    { text: 'w', key: 11 },
  ]

  const mainHeaderTransitions = useTransition(mainHeaderItems, item => item.key, {
    from: { opacity: 0, transform: 'translate3d(0,-40px,0)' },
    enter: { opacity: 1, transform: 'translate3d(0,0px,0)' },
    trail: 200,
    config: config.gentle,
  })

  const subHeaderItems = [
    { text: 'Technologist · ', key: 1 },
    { text: 'Problem Solver · ', key: 2 },
    { text: 'Contributer', key: 3 },
  ]

  const subHeaderTransitions = useTransition(subHeaderItems, item => item.key, {
    from: { opacity: 0, transform: 'translate3d(500px,400px,100px)' },
    enter: { opacity: 1, transform: 'translate3d(0,0px,0)' },
    immediate: false,
    trail: 1000,
    delay: 1000,
    config: config.stiff,
  })

  const textProps = useSpring({
    from: { transform: `translate(${window.innerWidth}px, 0)` },
    to: { transform: 'translate(0, 0)' },
    config: config.slow,
    delay: 3000,
  })

  return (
    <Shell>
      <Helmet>
        <title>Welcome, ברוך הבא, ようこそ, Bienvenido</title>
      </Helmet>

      <StyledContainer style={containerProps}>
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
          <h1>
            <StyledMiddleContentHeader>
              {mainHeaderTransitions.map(({ item, props, key }) => (
                <animated.div key={key} style={props}>
                  {item.text}
                </animated.div>
              ))}
            </StyledMiddleContentHeader>
          </h1>

          <StyledAvatar
            onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{ transform: avatarProps.xys.interpolate(trans) }}
            src={AvatarImage}
          />
          <StyleMiddleContentSubHeader>
            {subHeaderTransitions.map(({ item, props, key }) => (
              <animated.h4 key={key} style={props}>
                {item.text}
              </animated.h4>
            ))}
          </StyleMiddleContentSubHeader>
          <animated.p style={textProps}>These are some of the labels I go by.</animated.p>
          <animated.p style={textProps}>At my core, I'm just a human empowering other humans.</animated.p>
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
