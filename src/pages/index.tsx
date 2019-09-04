import React from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'

import { Container } from '../components/Layout/Container'

const StyledContent = styled.div`
  ul {
    list-style: none;
  }
`

const Index = () => {
  return (
    <Container>
      <Helmet>
        {/* TODO -> Vet what to put in head element  */}
        <title>Welcome, ברוך הבא, ようこそ, Bienvenido</title>
      </Helmet>
      <StyledContent>
        <h1>Hi world, my name is Andrew</h1>
        <h2>Below are some quick links, stay tuned for more information!</h2>
        <ul>
          <li>
            <a href="https://github.com/a-deal" target="_blank" rel="noreferrer noopener">
              Github
            </a>
          </li>
          <li>
            <a target="_blank" rel="noreferrer noopener" href="https://www.linkedin.com/in/adeal/">
              LinkedIn
            </a>
          </li>
          <li>
            <a target="_blank" rel="noreferrer noopener" href="https://medium.com/@a_e_deal">
              Medium
            </a>
          </li>
        </ul>
      </StyledContent>
    </Container>
  )
}

export default Index
