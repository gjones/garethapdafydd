import type { AppProps } from 'next/app'
import React, { useState } from 'react'
import useDarkMode from 'use-dark-mode'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from '../components/theme'

import '@styles/helpers/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true) // Add a loading state
  const darkMode = useDarkMode(true)
  const theme = darkMode.value ? darkTheme : lightTheme

  setTimeout(() => {
    setIsLoading(false)
  }, 1000)

  return (
    <ThemeProvider theme={theme}>
      {isLoading ? null : <Component {...pageProps} />}
    </ThemeProvider>
  )
}

export default MyApp
