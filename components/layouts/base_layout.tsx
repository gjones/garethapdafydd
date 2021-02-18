import React, { Component } from 'react'
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
    } = this.props

    return (
      <Wrapper>
        <Head>
          <title>{title}</title>
          <meta name='description' content={description}></meta>
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
