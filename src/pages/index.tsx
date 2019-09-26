import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import { animated } from 'react-spring'

import { Shell } from '../components/Layout/Shell'
import Home from '../components/Home'
import Portfolio from '../components/Portfolio'
import { globalTheme } from '../styles/Theme'
import LincolnQuote from '../images/transition_quote.png'

const BoxContainer = styled(animated.div)`
  box-sizing: border-box;
  display: flex;
  height: 100vh;
  width: 100vw;
  perspective: calc(100vw + 100vh);
`

const Box = styled(animated.div)`
  width: 100%;
  height: 100%;
  position: relative;
  margin: auto;
  transform-style: preserve-3d;
  transform: translateZ(-50vw);
  transition: transform 1s ease-out;
`

const BoxFace = styled.div<{ transform: string; height: string; width: string }>`
  background-color: grey;
  position: absolute;
  width: ${props => props.width};
  height: ${props => props.height};
  transform: ${props => props.transform};
`

const BoxFaceLift = styled.div`
  background-color: ${globalTheme.backgroundColor};
  box-shadow: 0 16px 32px 0 rgba(1, 1, 1, 1);
  height: calc(100% - 96px);
  margin: 48px;
`

const BoxFaceTopBottom = styled(BoxFace)`
  top: calc(calc(100vh - 100vw) / 2);
`

const StyledImage = styled.img`
  height: 100%;
  width: 100%;
`

// TODO Set background colors
const rotations = {
  front: {
    transform: 'rotateY(0deg) translateZ(50vw)',
    width: '100vw',
    height: '100vh',
  },
  back: {
    transform: 'rotateY(180deg) translateZ(50vw)',
    width: '100vw',
    height: '100vh',
  },
  right: {
    transform: 'rotateY(90deg) translateZ(50vw)',
    width: '100vw',
    height: '100vh',
  },
  left: {
    transform: 'rotateY(-90deg) translateZ(50vw)',
    width: '100vw',
    height: '100vh',
  },
  top: {
    transform: 'rotateX(90deg) translateZ(50vh)',
    width: '100vw',
    height: '100vw',
  },
  bottom: {
    transform: 'rotateX(-90deg) translateZ(50vh)',
    width: '100vw',
    height: '100vw',
  },
}

const Index = () => {
  const [transitionProps, setTransitionProps] = useState({})
  useEffect(() => {}, [transitionProps])
  const transitionHandler = (transitionProps: any): void => {
    setTransitionProps(transitionProps)
  }

  return (
    <Shell>
      <Helmet>
        {/* // TODO Abstract title config */}
        <title>{'Welcome, ברוך הבא, ようこそ, Bienvenido'}</title>
      </Helmet>

      <BoxContainer>
        <Box style={transitionProps}>
          <BoxFace {...rotations.front}>
            <BoxFaceLift>
              <Home onTransition={transitionHandler} />
            </BoxFaceLift>
          </BoxFace>
          <BoxFace {...rotations.back}>
            <BoxFaceLift>
              <Portfolio onTransition={transitionHandler} />
            </BoxFaceLift>
          </BoxFace>
          <BoxFace {...rotations.right}>
            <StyledImage src={LincolnQuote} />
          </BoxFace>
          <BoxFace {...rotations.left}>left</BoxFace>
          <BoxFaceTopBottom {...rotations.top}>top</BoxFaceTopBottom>
          <BoxFaceTopBottom {...rotations.bottom}>bottom</BoxFaceTopBottom>
        </Box>
      </BoxContainer>
    </Shell>
  )
}

export default Index
