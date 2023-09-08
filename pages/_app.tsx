import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import useDarkMode from 'use-dark-mode'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from '../components/theme'

import '@styles/helpers/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  const { value: isDarkMode } = useDarkMode(true)
  const theme = isDarkMode ? darkTheme : lightTheme

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Perform any necessary async operations (e.g., data fetching) here
    // Once the operations are complete, set isLoading to false
    async function fetchData() {
      // Example: Simulate loading data for 2 seconds
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setIsLoading(false)
    }

    fetchData()
  }, [])

  // Render a loading indicator or the content based on isLoading
  if (isLoading) {
    return (
      <html>
        <body>
          <LoadingWrap>
            <p>Loading...</p>
          </LoadingWrap>
        </body>
      </html>
    )
  }

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

const LoadingWrap = styled.div`
  width: 100%;
  height: 100vh;
  text-align: center;
  padding-top: 200px;
  justify-content: center;
  display: flex;
  background: ${(props) => props.theme.background};
`

export default MyApp
