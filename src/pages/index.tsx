import React from 'react'
import { Helmet } from 'react-helmet'

import { Shell } from '../components/Layout/Shell'
import Home from '../components/Home'

const Index = () => {
  return (
    <Shell>
      <Helmet>
        <title>{'Welcome, ברוך הבא, ようこそ, Bienvenido'}</title>
      </Helmet>
      <Home />
    </Shell>
  )
}

export default Index
