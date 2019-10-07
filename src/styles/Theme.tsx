import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from 'styled-theming'

import { fonts, Color } from './settings'

const mode = (themeMap: theme.ThemeMap) => theme('mode', themeMap)

// Global
export const globalTheme = {
  backgroundColor: mode({
    light: Color.burlyWood,
  }),
  color: mode({
    light: Color.spaceCadet,
  }),
  fontFamilyPrimary: fonts.primary,
  fontFamilySecondary: fonts.secondary,
}

// Global
export const iconTheme = {
  fill: mode({
    light: Color.spaceCadet,
  }),
}

export const Theme = (props: { children?: React.ReactChild }) => {
  const { children } = props
  return <ThemeProvider theme={{ mode: 'light' }}>{children}</ThemeProvider>
}
