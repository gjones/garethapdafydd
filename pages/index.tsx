import Page from '@layouts/base_layout'
import styles from '@styles/modules/index.module.scss'

export default function Home() {
  return (
    <Page
      title='Gareth ap Dafydd | Home'
      description='Designer and Developer'
      smallHeadline='Gareth ap Dafydd'
      largeHeadline='Design lead at Elastic.'
      largeHeadline2='Independent iOS app developer'
      profileImage={true}>
      <div className={styles.introSpacer} />
      <div className={styles.introduction}>
        <div className={styles.leftbar}>
          <img
            className={styles.waveSymbol}
            src='/assets/images/wave@2x.png'
            alt='wave symbol'
          />
        </div>
        <div className={styles.centre}>
          <p>Hi there,</p>
          <p>
            I’m Gareth, a passionate designer / developer for the web and iOS. I
            have over 15 years of professional experience in architecting,
            designing, and building digital products. I find beauty in
            simplicity, aiming for elegance and sophistication in every project
            that I&apos;m involved with.
          </p>

          <img
            src='/assets/images/gareth-wynne-cropped.png'
            alt='gareth wynne'
            className={styles.mobileHero}
          />

          <p>
            More recently, I’ve assumed the role of a hands-on leader,
            coordinating projects, providing long-term vision while helping
            build and nuture talented design teams.
          </p>
          <p>
            While no longer my full-time profession, I still love developing. My
            iOS app, Fight Scores, has amassed a loyal group of users and an
            average app store rating of 4.5.
          </p>
          <p>
            I love to write swift, ruby on rails, and react. When I get time I
            enjoy dabbling with elixir and phoenix.
          </p>
          <img
            src='/assets/images/separator@2x.png'
            alt='text separator'
            className={styles.separatorImage}
          />
          <p>
            Originally hailing from South Wales, I’m currently living in
            Charlotte, North Carolina, after enjoying spells working in Canada,
            India, Italy, and France.
          </p>
          <p>
            I love to get outdoors, running and hiking in the mountains. When
            not spending time with my beautiful wife and daughter, I can be
            found indulging my passions for wine and boxing.
          </p>
          <p>
            Hwyl fawr,
            <br />
            Gareth
          </p>
        </div>
        <div className={styles.rightbar}>
          <img
            src='/assets/images/gareth-and-wynne.jpg'
            alt='introduction-photo'
          />
        </div>
      </div>
    </Page>
  )
}
