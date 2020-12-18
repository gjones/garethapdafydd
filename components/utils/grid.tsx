import styled from 'styled-components'

export const FlexGroup = styled.div`
  display: flex;
  align-items: stretch;
  flex-grow: 1;
`

export const FlexGroupCentred = styled.div`
  display: flex;
  align-items: stretch;
  flex-grow: 1;
  justify-content: center;
  margin: ${(props) => props.theme.sizes.sizeS} 
`

export const FlexItem = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-basis: auto;
`

export const FlexItemCentred = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-basis: auto;
  margin: ${(props) => props.theme.sizes.sizeS} 
`

export const FlexListItem = styled.li`
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-basis: auto;
  margin: ${(props) => props.theme.sizes.sizeM} ${(props) => props.theme.sizes.sizeL};

  @media only screen and ${(props) => props.theme.mediaQueries.smallScreens} {
    margin: ${(props) => props.theme.sizes.sizeM} ${(props) => props.theme.sizes.sizeS};
  }
`