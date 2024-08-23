import type { AppProps } from 'next/app'
import useDarkMode from 'use-dark-mode'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from '../components/theme'
import { BrowserRouter } from 'react-router-dom'

import '@styles/helpers/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  const darkMode = useDarkMode(true)
  const initialTheme = darkMode.value

  return (
    <ThemeProvider theme={initialTheme ? darkTheme : lightTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
