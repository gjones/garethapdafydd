import styled from 'styled-components'
import LogoLinkedIn from './logo_linkedin'
import LogoTwitter from './logo_twitter'
import LogoGithub from './logo_github'
import LogoEnvelope from './logo_envelope'
import { FlexGroupCentred, FlexItemCentred } from 'components/utils/grid'

const Footer = styled.main`
  margin: ${(props) => props.theme.sizes.sizeXXL} 0;
  font-size: ${(props) => props.theme.fontSizes.textSmall};
  color: ${(props) => props.theme.text.light};
`

export default function Navigation() {
  const year = new Date().getFullYear()

  return (
    <Footer>
      <p>Imagined &amp; crafted by Gareth Dafydd Jones &copy; {year}</p>

      <FlexGroupCentred>
        <FlexItemCentred>
          <a
            href='https://www.linkedin.com/in/gdjones83/'
            target='_blank'
            rel='noreferrer'>
            <LogoLinkedIn />
          </a>
        </FlexItemCentred>
        <FlexItemCentred>
          <a
            href='https://twitter.com/garethapdafydd'
            target='_blank'
            rel='noreferrer'>
            <LogoTwitter />
          </a>
        </FlexItemCentred>
        <FlexItemCentred>
          <a href='https://github.com/gjones' target='_blank' rel='noreferrer'>
            <LogoGithub />
          </a>
        </FlexItemCentred>
        <FlexItemCentred>
          <a
            href='https://www.linkedin.com/in/gdjones83/'
            target='_blank'
            rel='noreferrer'>
            <LogoEnvelope />
          </a>
        </FlexItemCentred>
      </FlexGroupCentred>
    </Footer>
  )
}
