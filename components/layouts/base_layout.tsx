import React, { ReactNode } from 'react'
import HeadSEO from './headSEO'
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
  canonicalUrl?: string
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

const Page: React.FC<Props> = ({
  title,
  description,
  smallHeadline,
  largeHeadline,
  largeHeadline2,
  profileImage,
  socialImage,
  canonicalUrl,
  children,
}: Props) => {
  return (
    <Wrapper>
      <HeadSEO
        title={title}
        description={description}
        socialImage={socialImage}
        canonicalUrl={'https://garethdjones.com/' + canonicalUrl}
      />

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
          {children}
        </div>
        <Footer />
      </Container>
    </Wrapper>
  )
}

export default Page
