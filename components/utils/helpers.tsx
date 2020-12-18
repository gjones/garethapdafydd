import styled from 'styled-components'

export const SocialLogo = styled.svg`
  color: ${(props) => props.theme.text.link};
  opacity: 0.4;
  height: 1.4rem;
  width: 1.4rem;
  vertical-align: baseline;
  
  &:hover {
    cursor: pointer;
    opacity: 1;
    transition: ease-in 0.6s opacity;
  }
`

export const PrimaryButton = styled.a`
  background-color: ${(props) => props.theme.button.background};
  color: ${(props) => props.theme.button.colour};
  line-height: 0.8;
  max-height: 2.2rem;
  padding: ${(props) => props.theme.sizes.sizeM}
    ${(props) => props.theme.sizes.sizeL};
  border-radius: ${(props) => props.theme.sizes.sizeL};

  &:hover {
    background-color: ${(props) => props.theme.button.hoverBackground};
    transition: 0.3s ease-in-out background-color;
    cursor: pointer;
  }
`
