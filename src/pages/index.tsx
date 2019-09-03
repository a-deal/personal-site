import React from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import '../styles/index.css'

const StyledContainer = styled.div`
  ul {
    list-style: none;
  }
`

const Index = () => {
  return (
    <main>
      <Helmet>
        <title>Personal Site</title>
      </Helmet>
      <StyledContainer>
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
      </StyledContainer>
    </main>
  )
}

export default Index
