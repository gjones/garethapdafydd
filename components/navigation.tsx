//import Link from 'next/link'
import ActiveLink from '../components/activeLink'
import styles from '@styles/modules/navigation.module.scss'

export default function Navigation() {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.list}>
          <li className={styles.item}>
            <ActiveLink activeClassName={styles.active} href='/'>
              <a className={styles.link}>Home</a>
            </ActiveLink>
          </li>
          <li className={styles.item}>
            <ActiveLink activeClassName={styles.active} href='/projects'>
              <a className={styles.link}>Projects</a>
            </ActiveLink>
          </li>
          <li className={styles.item}>
            <ActiveLink activeClassName={styles.active} href='/thoughts'>
              <a className={styles.link}>Thoughts</a>
            </ActiveLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
