import ActiveLink from '../components/activeLink'
import useDarkMode from 'use-dark-mode'
import styled from 'styled-components'
import styles from '@styles/modules/navigation.module.scss'
import { FlexListItem } from './utils/grid'

const Header = styled.header`
  display: flex;
  align-items: stretch;
  flex-grow: 1;
  justify-content: flex-end;
  padding: ${(props) => props.theme.sizes.sizeXL};

  @media only screen and ${(props) => props.theme.mediaQueries.smallScreens} {
    padding: ${(props) => props.theme.sizes.sizeS};
  }
`

const NavList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  align-items: stretch;
  flex-grow: 1;
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
`

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
            <button onClick={darkMode.enable}>DARK MODE</button>
            <button onClick={darkMode.disable}>LIGHT MODE</button>
          </FlexListItem>
        </NavList>
      </nav>
    </Header>
  )
}
