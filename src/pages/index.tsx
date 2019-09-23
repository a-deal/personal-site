import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'

import { Shell } from '../components/Layout/Shell'
import Home from '../components/Home'
import Portfolio from '../components/Portfolio'

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

const BoxFace = styled.div<{ transform: string;height: string; width: string }>`
  border: 1px solid black;
  position: absolute;
  width: ${props => props.width};
  height: ${props => props.height};
  transform: ${props => props.transform};
  background-color: rgba(3, 121, 255, 0.5);
`

const BoxFaceTopBottom = styled(BoxFace)`
  top: calc(calc(100vh - 100vw) / 2);
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
  const [flip, setFlipState] = useState(false)

  const springBoxProps = useSpring({
    transform: ` translateZ(-50vw) rotateY(${flip ? '180deg' : '0deg'})`,
    config: { duration: 1000 },
  })

  const handleFlip = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setFlipState(!flip)
  }

  return (
    <Shell>
      <Helmet>
        {/* // TODO Abstract title config */}
        <title>{flip ? 'Portfolio' : 'Welcome, ברוך הבא, ようこそ, Bienvenido'}</title>
      </Helmet>

      <BoxContainer>
        <Box style={springBoxProps}>
          <BoxFace {...rotations.front}>
            <Home onFlip={handleFlip} />
          </BoxFace>
          <BoxFace {...rotations.back}>
            <Portfolio />
          </BoxFace>
          <BoxFace {...rotations.right}>right</BoxFace>
          <BoxFace {...rotations.left}>left</BoxFace>
          <BoxFaceTopBottom {...rotations.top}>top</BoxFaceTopBottom>
          <BoxFaceTopBottom {...rotations.bottom}>bottom</BoxFaceTopBottom>
        </Box>
      </BoxContainer>
    </Shell>
  )
}

export default Index
