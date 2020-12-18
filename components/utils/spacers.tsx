import styled from 'styled-components'

export const SpacerS = styled.div`
  height: ${(props) => props.theme.sizes.sizeS}
}
`

export const SpacerM = styled.div`
  height: ${(props) => props.theme.sizes.sizeM}
}
`

export const SpacerL = styled.div`
  height: ${(props) => props.theme.sizes.sizeL}
}
`

export const SpacerXL = styled.div`
  height: ${(props) => props.theme.sizes.sizeXL}
}
`

export const SpacerXXL = styled.div`
  height: ${(props) => props.theme.sizes.sizeXXL}
}
`

export const HorizontalDivide = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.divide};
  display: block;
  margin: 0 auto;
`
