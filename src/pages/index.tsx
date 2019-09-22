import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'

import { Shell } from '../components/Layout/Shell'
import Home from '../components/Home'
import Portfolio from '../components/Portfolio'

const CubeContainer = styled(animated.div)`
  box-sizing: border-box;
  display: flex;
  height: 100vh;
  width: 100vw;
  perspective: none;
`

const Cube = styled(animated.div)`
  width: 100%;
  height: 100%;
  position: relative;
  margin: auto;
  transform-style: preserve-3d;
  transform: translateZ(-50vh);
  transition: transform 1s ease-out;
`

const CubeFace = styled.div<{ transform: string; background: string }>`
  border: 1px solid black;
  position: absolute;
  width: 100vw;
  height: 100vh;
  transform: ${props => props.transform};
  background: ${props => props.background};
`

// TODO Set background colors
const rotations = {
  front: {
    transform: 'rotateY(0deg) translateZ(50vh)',
    background: 'hsla(  0, 100%, 50%, .7)',
  },
  back: {
    transform: 'rotateY(180deg) translateZ(50vh)',
    background: 'hsla(120, 100%, 50%, .7)',
  },
  right: {
    transform: 'rotateY(90deg) translateZ(50vh)',
    background: 'hsla( 60, 100%, 50%, .7)',
  },
  left: {
    transform: 'rotateY(-90deg) translateZ(50vh)',
    background: 'hsla(180, 100%, 50%, .7)',
  },
  top: {
    transform: 'rotateX(90deg) translateZ(50vh)',
    background: ' hsla(240, 100%, 50%, .7)',
  },
  bottom: {
    transform: 'rotateX(-90deg) translateZ(50vh)',
    background: 'background: hsla(300, 100%, 50%, 0.7);',
  },
}

const Index = () => {
  const [flip, setFlipState] = useState(false)

  const springCubeProps = useSpring({
    transform: ` translateZ(${flip ? '-50vh' : '0px'}) rotateX(${flip ? '-180deg' : '0deg'}) scale3d(${
      flip ? '-1, -1, 1' : '1,1,1'
    }) `,
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

      <CubeContainer>
        <Cube style={springCubeProps}>
          <CubeFace {...rotations.front}>
            <Home onFlip={handleFlip} />
          </CubeFace>
          <CubeFace {...rotations.back}>
            <Portfolio />
          </CubeFace>
          <CubeFace {...rotations.right}>right</CubeFace>
          <CubeFace {...rotations.left}>left</CubeFace>
          <CubeFace {...rotations.top}>top</CubeFace>
          <CubeFace {...rotations.bottom}>bottom</CubeFace>
        </Cube>
      </CubeContainer>
    </Shell>
  )
}

export default Index
