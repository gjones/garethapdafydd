import React, { Component, ReactNode } from 'react'
import Head from 'next/head'
import Navigation from '../navigation'
import Footer from '../footer'
import styled from 'styled-components'
import Title from '../title'
import { HorizontalDivide } from '../utils/spacers'

type Props = {
  title: string
  description: string
  smallHeadline: string
  largeHeadline: string
  largeHeadline2?: string
  profileImage?: boolean
  socialImage?: string
  children: ReactNode
}

const Wrapper = styled.section`
  background: ${(props) => props.theme.background};
`

const Container = styled.main`
  min-height: 100vh;
  padding: 0 ${(props) => props.theme.sizes.sizeS};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .main {
    flex: 1 1 auto;
    width: 70%;

    @media only screen and ${(props) =>
        props.theme.mediaQueries.mediumScreens} {
      width: 94%;
    }
  }
`

export default class Page extends Component<Props> {
  render() {
    const {
      title,
      description,
      smallHeadline,
      largeHeadline,
      largeHeadline2,
      profileImage,
      socialImage,
    } = this.props

    return (
      <Wrapper>
        <Head>
          <title>{title}</title>
          <meta name='description' content={description}></meta>
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/assets/images/favicon/apple-touch-icon.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/assets/images/favicon/favicon-32x32.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/assets/images/favicon/favicon-16x16.png'
          />
          <link rel='manifest' href='/assets/images/favicon/site.webmanifest' />
          <link
            rel='mask-icon'
            href='/assets/images/favicon/safari-pinned-tab.svg'
            color='#5bbad5'
          />

          <meta
            property='og:image'
            content={
              socialImage ? socialImage : '/assets/images/social-base.png'
            }
          />
          <meta
            property='twitter:image'
            content={
              socialImage ? socialImage : '/assets/images/social-base.png'
            }
          />
          <meta name='twitter:card' content='summary_large_image' />
          <meta name='theme-color' content='#ffffff'></meta>
          <script
            async
            defer
            data-domain='garethdjones.com'
            src='https://plausible.io/js/plausible.js'></script>
        </Head>

        <Container>
          <div className='main'>
            <Navigation />

            <Title
              smallHeadline={smallHeadline}
              largeHeadline={largeHeadline}
              largeHeadline2={largeHeadline2}
              profileImage={profileImage}
            />

            <HorizontalDivide />
            {this.props.children}
          </div>
          <Footer />
        </Container>
      </Wrapper>
    )
  }
}
