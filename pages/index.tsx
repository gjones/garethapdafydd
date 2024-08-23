import Page from '@layouts/base_layout'
import styled from 'styled-components'

import { FlexGroup, FlexItem } from '../components/utils/grid'
import { SpacerXL } from '../components/utils/spacers'
import { DefaultText } from '../components/utils/typography'

const WaveSymbol = styled.img`
  margin: ${(props) => props.theme.sizes.sizeM}
    ${(props) => props.theme.sizes.sizeL};
  max-width: ${(props) => props.theme.sizes.sizeML};
  height: ${(props) => props.theme.sizes.sizeML};

  @media only screen and ${(props) => props.theme.mediaQueries.smallScreens} {
    display: none;
  }
`

const MobileHero = styled.img`
  display: none;
  align-self: center;
  margin: ${(props) => props.theme.sizes.baseSize} auto
    ${(props) => props.theme.sizes.sizeXL};
  max-width: 86%;

  @media only screen and ${(props) => props.theme.mediaQueries.smallScreens} {
    display: block;
  }
`

const IntroPhoto = styled.img`
  margin: 4rem 6rem;
  max-width: 16rem;

  @media only screen and ${(props) => props.theme.mediaQueries.smallScreens} {
    display: none;
  }
`

const SeparatorPhoto = styled.img`
  align-self: center;
  margin: ${(props) => props.theme.sizes.sizeM}
    ${(props) => props.theme.sizes.sizeL};
  max-width: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 1 auto;

  @media only screen and ${(props) => props.theme.mediaQueries.smallScreens} {
    display: none;
  }
`

export default function Home() {
  return (
    <Page
      title='Gareth ap Dafydd | Home'
      description='The online home of Gareth Dafydd Jones. Design and Developer'
      smallHeadline='Gareth ap Dafydd'
      largeHeadline='Design lead at ClickHouse.'
      largeHeadline2='Independent iOS app developer'
      profileImage={true}
      canonicalUrl=''>
      <SpacerXL />

      <FlexGroup>
        <FlexItem>
          <WaveSymbol src='/assets/images/wave@2x.png' alt='wave symbol' />
        </FlexItem>

        <FlexItem>
          <DefaultText>Hi there,</DefaultText>
          <DefaultText>
            I’m Gareth, a passionate designer / developer for the web and iOS. I
            have over 15 years of professional experience in architecting,
            designing, and building digital products. I find beauty in
            simplicity, aiming for elegance and sophistication in every project
            that I&apos;m involved with.
          </DefaultText>

          <MobileHero
            src='/assets/images/gareth-wynne-cropped.png'
            alt='gareth wynne'
          />

          <DefaultText>
            More recently, I’ve assumed the role of a hands-on leader,
            coordinating projects, providing long-term vision while helping
            build and nuture talented design teams.
          </DefaultText>
          <DefaultText>
            While no longer my full-time profession, I still love developing. My
            iOS app, Fight Scores, has amassed a loyal group of users and an
            average app store rating of over 4.5.
          </DefaultText>
          <DefaultText>
            I love to write Swift, Ruby on Rails, and React. When I get time I
            enjoy dabbling with Elixir and Phoenix.
          </DefaultText>
          <SeparatorPhoto
            src='/assets/images/separator@2x.png'
            alt='text separator'
          />
          <DefaultText>
            Originally hailing from South Wales, I’m currently living in
            Charlotte, North Carolina, after enjoying spells working in Canada,
            India, Italy, and France.
          </DefaultText>
          <DefaultText>
            I love to get outdoors, running and hiking in the mountains. When
            not spending time with my beautiful daughter and son, I can
            be found indulging my passions for wine and boxing.
          </DefaultText>
          <DefaultText>
            Hwyl fawr,
            <br />
            Gareth
          </DefaultText>
        </FlexItem>
        <FlexItem>
          <IntroPhoto
            src='/assets/images/gareth-and-wynne.jpg'
            alt='introduction-photo'
          />
        </FlexItem>
      </FlexGroup>
    </Page>
  )
}
