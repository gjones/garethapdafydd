import React from 'react'
import Link from 'next/link'
import Page from '@layouts/base_layout'
import Date from '../../components/utils/date'
import { getSortedPostsData } from 'lib/posts'
import styled from 'styled-components'

import { SpacerXL, HorizontalDivide } from 'components/utils/spacers'
import { DefaultText } from 'components/utils/typography'
import { FlexGroup } from 'components/utils/grid'
import { PrimaryButton } from 'components/utils/helpers'

type Props = {
  allPostsData: any
}

const PostList = styled.div`
  list-style: none;
`

const BlogPost = styled.div`
  max-width: 94%;
  cursor: pointer;

  @media only screen and ${(props) => props.theme.mediaQueries.smallScreens} {
    max-width: 98%;
  }
`

const BlogDate = styled.h4`
  font-weight: ${(props) => props.theme.fontWeights.fontRegular};
  font-size: ${(props) => props.theme.fontSizes.textLarge};
  color: ${(props) => props.theme.text.light};
  margin: ${(props) => props.theme.sizes.sizeXL} 0
    ${(props) => props.theme.sizes.sizeXS};
`

const BlogHeadline = styled.h2`
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

export default class Thoughts extends React.Component<Props> {
  render() {
    return (
      <Page
        title='Thoughts &amp; Musings | Gareth ap Dafydd'
        description='Some thoughts and musings from Gareth Dafydd Jones, designer and developer'
        smallHeadline='Thoughts &amp; Musings'
        largeHeadline='I barely tweet, so don’t expect much in the way of blog posts'>
        <PostList>
          {this.props.allPostsData.map(({ id, date, title, abstract }: any) => (
            <li key={id}>
              <Link href={`/thoughts/${id}`}>
                <BlogPost>
                  <BlogDate>
                    <Date dateString={date} />
                  </BlogDate>
                  <BlogHeadline>{title}</BlogHeadline>
                  <DefaultText>{abstract}</DefaultText>
                  <FlexGroup>
                    <PrimaryButton>Read post</PrimaryButton>
                  </FlexGroup>

                  <SpacerXL />
                  <HorizontalDivide />
                </BlogPost>
              </Link>
            </li>
          ))}
        </PostList>
      </Page>
    )
  }
}
export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}
