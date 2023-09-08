import Page from '@layouts/base_layout'
import {
  SpacerM,
  SpacerXL,
  HorizontalDivide,
} from '../../components/utils/spacers'
import { FlexGroup, FlexItem } from '../../components/utils/grid'
import { DefaultText } from '../../components/utils/typography'
import { PrimaryButton } from '../../components/utils/helpers'
import styled from 'styled-components'

const Project = styled.div`
  display: flex;
  align-items: stretch;
  flex-grow: 1;
  justify-content: space-between;

  @media only screen and ${(props) => props.theme.mediaQueries.smallScreens} {
    flex-direction: column;
  }
`

const ProjectTitle = styled.h2`
  font-weight: ${(props) => props.theme.fontWeights.fontBold};
  font-size: ${(props) => props.theme.fontSizes.textLarger};
  color: ${(props) => props.theme.text.default};
  margin-top: 0;
  margin-bottom: ${(props) => props.theme.sizes.sizeM};

  @media only screen and ${(props) => props.theme.mediaQueries.smallScreens} {
    font-size: ${(props) => props.theme.fontSizes.textLarger};
    line-height: 1.1;
  }
`

const FlexSplitL = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-basis: auto;
  max-width: 50%;
  padding-right: 3%;

  @media only screen and ${(props) => props.theme.mediaQueries.mediumScreens} {
    padding-right: 6%;
  }

  @media only screen and ${(props) => props.theme.mediaQueries.smallScreens} {
    max-width: 94%;
    padding-left: 2%;
    padding-right: 0;
  }
`

const FlexSplitR = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-basis: auto;
  max-width: 50%;
  padding-right: 2%;

  @media only screen and ${(props) => props.theme.mediaQueries.smallScreens} {
    max-width: 94%;
    padding-right: 0;
  }
`

const StarFlexGroup = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;

  div {
    margin-right: ${(props) => props.theme.sizes.sizeXS};

    &:first-child {
      margin-left: ${(props) => props.theme.sizes.sizeM};
    }
  }

  @media only screen and ${(props) => props.theme.mediaQueries.smallScreens} {
    margin-top: ${(props) => props.theme.sizes.sizeL};
  }
`

const StarImage = styled.img`
  max-height: 1.375rem;
  max-width: 1.375rem;
`

const StarText = styled.p`
  color: ${(props) => props.theme.text.light};
  margin-left: ${(props) => props.theme.sizes.sizeM};
  padding-top: ${(props) => props.theme.sizes.sizeXS};
`

const ProjectImage = styled.img`
  max-height: 28rem;
  max-width: 28rem;

  @media only screen and ${(props) => props.theme.mediaQueries.smallScreens} {
    max-width: 94%;
  }
`

const ProjectImageAlt = styled.img`
  max-width: 28rem;

  @media only screen and ${(props) => props.theme.mediaQueries.smallScreens} {
    max-width: 94%;
  }
`

export default function Projects() {
  return (
    <Page
      title='Projects | Gareth ap Dafydd'
      description='A collection of past notable project from my career'
      smallHeadline='Projects'
      largeHeadline='A selection of both personal and professional work'
      canonicalUrl='projects'>
      <SpacerXL />
      <Project>
        <FlexSplitL>
          <ProjectTitle>Fight Scores 3.0</ProjectTitle>
          <DefaultText>
            <strong>Another year, another rewrite.</strong> In the past I’ve
            rewritten Fight Scores from Objective C to Swift 1, and from Swift 1
            to Swift 3. This year I converted to Swift v5 and removed any trace
            of interface builder while rethinking the entire experience.
          </DefaultText>
          <DefaultText>
            Due to the Covid-19 pandemic, there was a period with zero new
            boxing events across the entire planet. So a large part of
            rethinking how users were interacting with Fight Scores was putting
            renewed focus on histrical fights.
          </DefaultText>
          <DefaultText>
            The existing framework remains the same from previous versions, I
            constructed a robust yet flexible database and API in Ruby on Rails,
            which I host on Linode. The universal iOS client is now using Swift
            5, and the web interface is using Rails. There&lsquo;s a marketing
            website and blog available at{' '}
            <a href='https://fightscores.co'>fightscores.co</a>, the app itself
            is available to download for free on the App Store.
          </DefaultText>
          <DefaultText>
            To read more about this release,{' '}
            <a href='/thoughts/new-look-fight-scores'>view this blog post</a>.
          </DefaultText>
          <FlexGroup>
            <PrimaryButton href='http://itunes.apple.com/app/fight-scores-2-boxing-scorecards/id1125374157?ls=1&mt=8'>
              View on App Store
            </PrimaryButton>
          </FlexGroup>
        </FlexSplitL>

        <FlexSplitR>
          <SpacerM />
          <FlexItem>
            <StarFlexGroup>
              <FlexItem>
                <StarImage
                  src='/assets/images/projects/star-filled.png'
                  alt='star filled'
                />
              </FlexItem>
              <FlexItem>
                <StarImage
                  src='/assets/images/projects/star-filled.png'
                  alt='star filled'
                />
              </FlexItem>
              <FlexItem>
                <StarImage
                  src='/assets/images/projects/star-filled.png'
                  alt='star filled'
                />
              </FlexItem>
              <FlexItem>
                <StarImage
                  src='/assets/images/projects/star-filled.png'
                  alt='star filled'
                />
              </FlexItem>
              <FlexItem>
                <StarImage
                  src='/assets/images/projects/star-half.png'
                  alt='star half'
                />
              </FlexItem>
              <FlexItem>
                <StarText>100+ ratings</StarText>
              </FlexItem>
            </StarFlexGroup>
          </FlexItem>
          <FlexItem>
            <ProjectImage
              src='/assets/images/projects/fight-scores.png'
              alt='introduction-photo'
            />
          </FlexItem>
        </FlexSplitR>
      </Project>

      <SpacerXL />
      <HorizontalDivide />
      <SpacerXL />

      <Project>
        <FlexSplitL>
          <ProjectTitle>Elastic Cloud</ProjectTitle>
          <DefaultText>
            Between 2016-2020, I led the design efforts on Elastic Cloud, the
            official hosted offering of Elasticsearch.
          </DefaultText>
          <DefaultText>
            I joined Elastic when the Cloud team was in it&lsquo;s infancy and
            performed very much as the lone designer-developer, working to
            identify and produce solutions to UI issues while helping out the UI
            devs in the React codebase. Following an organisation reshuffle, I
            worked to establish and build out a design team in Cloud. While
            still spending a lot of time directly contributing to projects, I
            also provided longer-term product vision and direction as well as
            guidance to the ever growing set of designers.
          </DefaultText>
          <DefaultText>
            As the team became more mature, we were also able to increase our
            user testing efforts and that helped us successfully position design
            further upstream in projects.
          </DefaultText>
        </FlexSplitL>

        <FlexSplitR>
          <SpacerXL />
          <SpacerM />
          <ProjectImage
            src='/assets/images/projects/cloud-screenshot.png'
            alt='cloud screenshot'
          />
        </FlexSplitR>
      </Project>

      <SpacerXL />
      <HorizontalDivide />
      <SpacerXL />

      <Project>
        <FlexSplitL>
          <ProjectTitle>LPL Financial</ProjectTitle>
          <DefaultText>
            I spent nearly two years at LPL, who are the largest independent
            broker/dealer in the United States and provide support and services
            to over 16,000 financial advisors.
          </DefaultText>
          <DefaultText>
            One of the most rewarding projects I worked on while there was
            leading design efforts on a 9 month project to integrate a single
            order entry trading system into our flagship financial advisor
            platform, ClientWorks. In November 2016, it was successfully rolled
            out to 15,000 financial advisor to unanimously positive feedback.
          </DefaultText>
        </FlexSplitL>

        <FlexSplitR>
          <SpacerXL />
          <SpacerM />
          <ProjectImage
            src='/assets/images/projects/lpl-screenshot.png'
            alt='screenshot finance'
          />
        </FlexSplitR>
      </Project>

      <SpacerXL />
      <HorizontalDivide />
      <SpacerXL />

      <Project>
        <FlexSplitL>
          <ProjectTitle>GoHealth</ProjectTitle>
          <DefaultText>
            GoHealth is a health insurance startup located in River North,
            Chicago. I was part of the core team that programmed and launched an
            online marketplace for health insurance on October 1st 2013, making
            GoHealth one of the first companies to do so when President
            Obama&lsquo;s health care law came into effect. In addition to our
            own product, we also provided white labelled services to some of the
            largest companies in the United States.
          </DefaultText>
          <DefaultText>
            Originally, I was part of the team that established, then outlined
            the User Experience for the project. Once development started my
            role was to guide front-end interactive design and development. That
            role entailed creating, maintaining and scaling stylesheets, coding
            page templates and creating directives to handle behaviour for any
            advanced UI functionality required. The GoHealth Health Insurance
            Exchange Marketplace can be found at GoHealthInsurance.com .
          </DefaultText>
          <DefaultText>
            Technologies Used: AngularJS, Grails, Grunt, HTML, SCSS, PhantomJS
          </DefaultText>
        </FlexSplitL>

        <FlexSplitR>
          <SpacerXL />
          <SpacerM />
          <ProjectImage
            src='/assets/images/projects/gohealth-screenshot.png'
            alt='introduction-photo'
          />
        </FlexSplitR>
      </Project>

      <SpacerXL />
      <HorizontalDivide />
      <SpacerXL />

      <Project>
        <FlexSplitL>
          <ProjectTitle>Corkings</ProjectTitle>
          <DefaultText>
            Corkings is an ongoing side project of mine. One of my personal
            passions is wine, so I decided to combine that with my passion for
            web development and create an online wine community. With Corkings,
            wine enthusiasts can discover, review and share wines, as well as
            follow what their friends are drinking.
          </DefaultText>
          <DefaultText>
            The site has been through many iterations and took me about a
            year&lsquo;s work, evenings and weekends, to get it to the point
            it&lsquo;s at today, a robust and reliable web application. As I
            found out, there are many different many different facets to
            building a social networking site, from logins, passwords and
            storing user information securely, to designing an experience that
            is informative without being overwhelming, friendly without being
            juvenile. It has been, and continues to be a great learning
            experience for myself.
          </DefaultText>
          <DefaultText>
            I&lsquo;m currently working on an iOS companion to make it easier to
            add wines while you&lsquo;re on the go. Corkings can be found at
            Corkings.com .
          </DefaultText>
          <DefaultText>
            Technologies Used: Ruby, Rails, HAML, SCSS, Postgres, RSpec
          </DefaultText>
        </FlexSplitL>

        <FlexSplitR>
          <SpacerXL />
          <SpacerM />
          <ProjectImageAlt
            src='/assets/images/projects/corkings-screenshot.png'
            alt='introduction-photo'
          />
        </FlexSplitR>
      </Project>

      <SpacerXL />
      <HorizontalDivide />
      <SpacerXL />

      <Project>
        <FlexSplitL>
          <ProjectTitle>WarmlyYours Inc</ProjectTitle>
          <DefaultText>
            WarmlyYours is a company located in the northern suburbs of Chicago
            specializing in Radiant Heating Systems. Their flagship product is
            their Floor Heating Systems, but they are also known for their
            outdoor radiant heating, snow melting systems and LAVA® Heating
            Panels.
          </DefaultText>
          <DefaultText>
            I arrived at WarmlyYours in 2006 as an intern and spent an enjoyable
            7 years of my life there. By the time I left I was accountable for
            the web site design and development, as well as the interaction and
            usability. My role also stretched to working alongside the graphic
            designer to ensure that the branding voice of the company was
            present throughout our materials regardless of the medium.
          </DefaultText>
          <DefaultText>
            During my time at WarmlyYours we were responsible for rolling out an
            industry first online shopping cart and a Ruby-based, Customer
            Relationship Management system. The WarmlyYours site can be found at
            WarmlyYours.com . Technologies Used: HTML, SCSS, jQuery
          </DefaultText>
        </FlexSplitL>

        <FlexSplitR>
          <SpacerXL />
          <SpacerM />
          <ProjectImage
            src='/assets/images/projects/wy-screenshot.png'
            alt='warmlyyours-photo'
          />
        </FlexSplitR>
      </Project>
    </Page>
  )
}
