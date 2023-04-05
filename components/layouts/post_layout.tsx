import React, { Component } from 'react'
import Page from '@layouts/base_layout'
import styled from 'styled-components'

type Props = {
  title: string
  description: string
  largeHeadline: string
  children: any
}

const PostContainer = styled.div`
  margin: ${(props) => props.theme.sizes.sizeL} 0;

  time {
    color: ${(props) => props.theme.text.light};
  }

  p,
  ul {
    color: ${(props) => props.theme.text.default};
    line-height: 1.5;
    max-width: 85%;

    a {
      color: ${(props) => props.theme.text.link};

      &:hover {
        text-decoration: underline;
      }
    }
  }

  pre {
    background: ${(props) => props.theme.code.background};
    color: ${(props) => props.theme.code.text};
    padding: ${(props) => props.theme.sizes.sizeM};
    border-radius: ${(props) => props.theme.sizes.sizeS};
  }

  li {
    margin: ${(props) => props.theme.sizes.sizeM} 0;
  }

  .left,
  strong {
    display: flex;
    align-items: flex-start;
    margin: ${(props) => props.theme.sizes.sizeXL} 0;
    img {
      max-width: 85%;
    }

    @media only screen and ${(props) => props.theme.mediaQueries.smallScreens} {
      img {
        max-width: 100%;
      }
    }
  }

  .centred,
  em {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: ${(props) => props.theme.sizes.sizeXL} 0;
    img {
      max-width: 85%;
    }
  }
`

export default class PostPage extends Component<Props> {
  render() {
    return (
      <Page
        title={this.props.title}
        description={this.props.description}
        smallHeadline='Thoughts &amp; Musings'
        largeHeadline={this.props.title}>
        <PostContainer>{this.props.children}</PostContainer>
      </Page>
    )
  }
}
