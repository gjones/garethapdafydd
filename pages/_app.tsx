import type { AppProps } from 'next/app'
import useDarkMode from 'use-dark-mode'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from '../components/theme'

import '@styles/helpers/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  const { value: isDarkMode } = useDarkMode(true)
  const theme = isDarkMode ? darkTheme : lightTheme

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
