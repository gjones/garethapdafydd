import styles from '@styles/modules/footer.module.scss'
import LogoLinkedIn from './logo_linkedin'
import LogoTwitter from './logo_twitter'
import LogoGithub from './logo_github'
import LogoEnvelope from './logo_envelope'

export default function Navigation() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <p>Imagined &amp; crafted by Gareth Dafydd Jones &copy; {year}</p>

      <div className={styles.flexGroup}>
        <div className={styles.flexItem}>
          <a
            href='https://www.linkedin.com/in/gdjones83/'
            target='_blank'
            rel='noreferrer'>
            <LogoLinkedIn />
          </a>
        </div>
        <div className={styles.flexItem}>
          <a
            href='https://twitter.com/garethapdafydd'
            target='_blank'
            rel='noreferrer'>
            <LogoTwitter />
          </a>
        </div>
        <div className={styles.flexItem}>
          <a href='https://github.com/gjones' target='_blank' rel='noreferrer'>
            <LogoGithub />
          </a>
        </div>
        <div className={styles.flexItem}>
          <a
            href='https://www.linkedin.com/in/gdjones83/'
            target='_blank'
            rel='noreferrer'>
            <LogoEnvelope />
          </a>
        </div>
      </div>
    </footer>
  )
}
