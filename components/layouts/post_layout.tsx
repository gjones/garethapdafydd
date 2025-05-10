import React from 'react'
import Page from '@layouts/base_layout'
import styled from 'styled-components'

type Props = {
  title: string
  description: string
  largeHeadline: string
  socialImage: string
  canonicalUrl: string
  children: any
}

const PostContainer = styled.div`
  margin: ${(props) => props.theme.sizes.sizeL} 0;

  time {
    color: ${(props) => props.theme.text.light};
  }

  p,
  ul,
  .note {
    color: ${(props) => props.theme.text.default};
    line-height: 1.5;
    max-width: 94%;

    a {
      color: ${(props) => props.theme.text.link};

      &:hover {
        text-decoration: underline;
      }
    }

    @media only screen and ${(props) => props.theme.mediaQueries.smallScreens} {
      max-width: 98%;
    }
  }

  .figure {
    color: ${(props) => props.theme.text.light};
    text-align: center;
    font-size: ${(props) => props.theme.sizes.sizeM};
    margin-top: -${(props) => props.theme.sizes.sizeL};
  }

  .note {
    background: ${(props) => props.theme.divide};
    color: ${(props) => props.theme.text.default};
    padding: ${(props) => props.theme.sizes.sizeML};
    border-radius: ${(props) => props.theme.sizes.sizeS};
    margin-top: 3rem;
  }

  h3 {
    margin-top: 3rem;
    color: ${(props) => props.theme.text.default};
  }

  code {
    background: ${(props) => props.theme.divide};
    padding: ${(props) => props.theme.sizes.sizeXS};
    border-radius: ${(props) => props.theme.sizes.sizeXS};
    margin-top: -2px;
  }

  pre {
    background: ${(props) => props.theme.code.background};
    color: ${(props) => props.theme.code.text};
    padding: ${(props) => props.theme.sizes.sizeM};
    border-radius: ${(props) => props.theme.sizes.sizeS};
    code {
      background: transparent;
    }
    @media only screen and ${(props) => props.theme.mediaQueries.smallScreens} {
      code {
        white-space: break-spaces;
        word-break: break-word;
      }
    }
  }

  li {
    margin: ${(props) => props.theme.sizes.sizeM} 0;
    color: ${(props) => props.theme.text.default};
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

const PostPage: React.FC<Props> = ({
  title,
  description,
  largeHeadline,
  socialImage,
  canonicalUrl,
  children,
}: Props) => {
  return (
    <Page
      title={title}
      description={description}
      smallHeadline='Thoughts &amp; Musings'
      largeHeadline={largeHeadline}
      socialImage={socialImage}
      canonicalUrl={canonicalUrl}
    >
      <PostContainer>{children}</PostContainer>
    </Page>
  )
}

export default PostPage
