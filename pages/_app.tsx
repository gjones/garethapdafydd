import type { AppProps /*, AppContext */ } from 'next/app'
import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import useDarkMode from 'use-dark-mode'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from '../components/theme'

import '@styles/helpers/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  const [isMounted, setIsMounted] = useState(false)
  const darkMode = useDarkMode(true)
  const theme = darkMode.value ? darkTheme : lightTheme

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta
          name='twitter:image'
          content='https://garethdjones.com/assets/images/social-base.png'
        />
        <meta
          property='og:image'
          content='https://garethdjones.com/assets/images/social-base.png'
        />
      </Head>
      {isMounted && <Component {...pageProps} />}
    </ThemeProvider>
  )
}
export default MyApp
