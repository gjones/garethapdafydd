import React, { Fragment, Component } from 'react'
import styled from 'styled-components'
import { FlexGroup, FlexItem } from './utils/grid'

const LargeHeadlineStyle = styled.h1`
  font-weight: ${(props) => props.theme.fontWeights.fontBold};
  font-size: ${(props) => props.theme.fontSizes.textLargest};
  color: ${(props) => props.theme.text.default};
  max-width: 55rem;
  margin-top: ${(props) => props.theme.sizes.sizeXXS};

  @media only screen and ${(props) => props.theme.mediaQueries.smallScreens} {
    font-size: ${(props) => props.theme.fontSizes.textLarger}; 
    line-height: 1.1;
  }
`

const SmallHeadlineStyle = styled.h2`
  font-weight: ${(props) => props.theme.fontWeights.fontBold};
  font-size: ${(props) => props.theme.fontSizes.textLarge};
  color: ${(props) => props.theme.text.accent};
  margin-bottom: ${(props) => props.theme.sizes.sizeXS};
`

const ProfileImage = styled.div`
  display: flex;
  align-items: stretch;
  flex-grow: 1;
  max-width: 10rem;

  img {
    height: 6.75em;
    width: 6.75rem;
    border-radius: 10rem;
    margin-top: 3.5rem;
  }

  @media only screen and ${(props) => props.theme.mediaQueries.smallScreens} {
    display: none;
  }
`

type Props = {
  smallHeadline: string
  largeHeadline: string
  largeHeadline2?: string
  profileImage?: boolean
}

export default class Title extends Component<Props> {
  static defaultProps = {
    smallHeadline: 'Hello',
    largeHeadline: 'Big old title',
    largeHeadline2: '',
    profileImage: false,
  }

  render() {
    const {
      smallHeadline,
      largeHeadline,
      largeHeadline2,
      profileImage,
    } = this.props

    let pageHeadline
    let headerContent

    if (largeHeadline2) {
      pageHeadline = (
        <Fragment>
          {largeHeadline}
          <br /> {largeHeadline2}
        </Fragment>
      )
    } else {
      pageHeadline = <Fragment>{largeHeadline}</Fragment>
    }

    if (profileImage) {
      headerContent = (
        <Fragment>
          <FlexGroup>
            <ProfileImage>
              <img
                src='/assets/images/gareth-colour.jpg'
                alt='Gareth ap Dafydd'
              />
            </ProfileImage>
            <FlexItem>
              <SmallHeadlineStyle>{smallHeadline}</SmallHeadlineStyle>
              <LargeHeadlineStyle>{pageHeadline}</LargeHeadlineStyle>
            </FlexItem>
          </FlexGroup>
        </Fragment>
      )
    } else {
      headerContent = (
        <Fragment>
          <SmallHeadlineStyle>{smallHeadline}</SmallHeadlineStyle>
          <LargeHeadlineStyle>{pageHeadline}</LargeHeadlineStyle>
        </Fragment>
      )
    }
    return <Fragment>{headerContent}</Fragment>
  }
}
