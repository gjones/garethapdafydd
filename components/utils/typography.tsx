import styled from 'styled-components'

export const DefaultText = styled.p`
  color: ${(props) => props.theme.text.default};
  font-size: ${(props) => props.theme.fontSizes.textRegular};
  line-height: 1.6;
  padding-bottom: ${(props) => props.theme.sizes.baseSize};
  padding-top: ${(props) => props.theme.sizes.sizeS};
  margin: 0;
}
`
