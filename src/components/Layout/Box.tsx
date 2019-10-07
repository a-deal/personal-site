import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'

const BoxContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  height: 100vh;
  width: 100vw;
  perspective: calc(100vw + 100vh);
`

const Box = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  margin: auto;
  transform-style: preserve-3d;
  transform: translateZ(-50vw);
  transition: transform 1s ease-out;
`

const BoxFace = styled.div<{ transform: string; height: string; width: string }>`
  position: absolute;
  width: ${props => props.width};
  height: ${props => props.height};
  opacity: 1;
  transform: ${props => props.transform};
`

const BoxFaceTopBottom = styled(BoxFace)`
  top: calc(calc(100vh - 100vw) / 2);
`

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

const BoxComponent = (props: PropsWithChildren<{}>) => {
  return (
    <BoxContainer>
      <Box>
        <BoxFace {...rotations.front}>front</BoxFace>
        <BoxFace {...rotations.back}>back</BoxFace>
        <BoxFace {...rotations.right}>right</BoxFace>
        <BoxFace {...rotations.left}>left</BoxFace>
        <BoxFaceTopBottom {...rotations.top}>top</BoxFaceTopBottom>
        <BoxFaceTopBottom {...rotations.bottom}>bottom</BoxFaceTopBottom>
      </Box>
    </BoxContainer>
  )
}

export default BoxComponent
