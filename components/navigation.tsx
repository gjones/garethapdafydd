import ActiveLink from './utils/activeLink'
import useDarkMode from 'use-dark-mode'
import styled from 'styled-components'
import styles from '@styles/modules/navigation.module.scss'
import { FlexListItem } from './utils/grid'
import GlyphSun from './glyphs/glyph_sun'
import GlyphMoon from './glyphs/glyph_moon'

export default function Navigation() {
  const darkMode = useDarkMode(true)

  return (
    <Header>
      <nav>
        <NavList>
          <FlexListItem>
            <ActiveLink activeClassName={styles.active} href='/'>
              <NavLink>Home</NavLink>
            </ActiveLink>
          </FlexListItem>
          <FlexListItem>
            <ActiveLink activeClassName={styles.active} href='/projects'>
              <NavLink>Projects</NavLink>
            </ActiveLink>
          </FlexListItem>
          <FlexListItem>
            <ActiveLink activeClassName={styles.active} href='/thoughts'>
              <NavLink>Thoughts</NavLink>
            </ActiveLink>
          </FlexListItem>
          <FlexListItem>
            {darkMode.value ? (
              <a onClick={darkMode.disable}>
                <GlyphSun />
              </a>
            ) : (
              <a onClick={darkMode.enable}>
                <GlyphMoon />
              </a>
            )}
          </FlexListItem>
        </NavList>
      </nav>
    </Header>
  )
}

const Header = styled.header`
  display: flex;
  align-items: stretch;
  flex-grow: 1;
  justify-content: flex-end;
  padding: ${(props) => props.theme.sizes.sizeXL} 0;

  @media only screen and ${(props) => props.theme.mediaQueries.smallScreens} {
    padding: ${(props) => props.theme.sizes.sizeS} 0;
    justify-content: space-between;
  }
`

const NavList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  align-items: center;

  flex-grow: 1;

  @media only screen and ${(props) => props.theme.mediaQueries.smallScreens} {
    flex-wrap: wrap;

    li {
      margin: 0.75rem;

      &:first-child {
        margin-left: 0;
      }

      svg {
        width: 20px;
      }
    }
  }
`

const NavLink = styled.a`
  color: ${(props) => props.theme.text.default};
  padding: ${(props) => props.theme.sizes.baseSize};
  text-decoration: none;
  &:hover,
  &.active {
    color: ${(props) => props.theme.text.link};
    cursor: pointer;
  }

  @media only screen and ${(props) => props.theme.mediaQueries.smallScreens} {
    padding: 0;
    }
  }
`
