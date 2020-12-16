import Page from '@layouts/base_layout'
import styles from '@styles/modules/projects.module.scss'

export default function Projects() {
  return (
    <Page
      title='Projects | Gareth ap Dafydd'
      description='A collection of past notable project from my career | Gareth ap Dafydd'
      smallHeadline='Projects'
      largeHeadline='A selection of both personal and professional work'>
      <div className={styles.spacerExtraLarge} />
      <div className={styles.project}>
        <div className={styles.projectLeft}>
          <h2 className={styles.projectHeadline}>Fight Scores 3.0</h2>
          <p>
            <strong>Another year, another rewrite.</strong> In the past I’ve
            rewritten Fight Scores from Objective C to Swift 1, and from Swift 1
            to Swift 3. This year I converted to Swift v5 and removed any trace
            of interface builder while rethinking the entire experience.
          </p>
          <p>
            Due to the Covid-19 pandemic, there was a period with zero new
            boxing events across the entire planet. So a large part of
            rethinking how users were interacting with Fight Scores was putting
            renewed focus on histrical fights.
          </p>
          <p>
            The existing framework remains the same from previous versions, I
            constructed a robust yet flexible database and API in Ruby on Rails,
            which I host on Linode. The universal iOS client is now using Swift
            5, and the web interface is using Rails. There&lsquo;s a marketing
            website and blog available at{' '}
            <a href='https://fightscores.co'>fightscores.co</a>, the app itself
            is available to download for free on the App Store.
          </p>
          <div className={styles.flexGroup}>
            <div className={styles.projectButton}>View on App Store</div>
          </div>
        </div>

        <div className={styles.projectRight}>
          <div className={styles.spacerLarge} />
          <div className={styles.flexImageGroup}>
            <div className={styles.flexItemGrowZero}>
              <img
                src='/assets/images/projects/star-filled.png'
                alt='star filled'
                className={styles.starImage}
              />
            </div>
            <div className={styles.flexItemGrowZero}>
              <img
                src='/assets/images/projects/star-filled.png'
                alt='star filled'
                className={styles.starImage}
              />
            </div>
            <div className={styles.flexItemGrowZero}>
              <img
                src='/assets/images/projects/star-filled.png'
                alt='star filled'
                className={styles.starImage}
              />
            </div>
            <div className={styles.flexItemGrowZero}>
              <img
                src='/assets/images/projects/star-filled.png'
                alt='star filled'
                className={styles.starImage}
              />
            </div>
            <div className={styles.flexItemGrowZero}>
              <img
                src='/assets/images/projects/star-half.png'
                alt='star half'
                className={styles.starImage}
              />
            </div>
            <div className={styles.flexItemGrowZero}>
              <p className={styles.starText}>100+ ratings</p>
            </div>
          </div>
          <img
            src='/assets/images/projects/fight-scores.png'
            alt='introduction-photo'
            className={styles.leadImage}
          />
        </div>
      </div>

      <div className={styles.spacerExtraLarge} />
      <div className={styles.divideHorizontal} />
      <div className={styles.spacerExtraLarge} />

      <div className={styles.project}>
        <div className={styles.projectLeft}>
          <h2 className={styles.projectHeadline}>Elastic Cloud</h2>
          <p>
            Since 2016, I&lsquo;ve been leading the design efforts on Elastic
            Cloud, the official hosted offering of Elasticsearch.
          </p>
          <p>
            I joined the Cloud team early on and performed very much as the lone
            designer-developer, working to identify and produce solutions to UI
            issues while helping out the UI devs in the React codebase.
            Following an organisation reshuffle, I&lsquo;ve been working to
            establish and build out a design team in Cloud. While I still spend
            a lot of time directly contributing to projects, I also provide
            longer-term product vision and direction as well as guidance to our
            ever growing set of designers.
          </p>
          <p>
            As the team has become more mature, we&lsquo;ve been able to
            increase our user testing efforts and have used that to successfully
            position design further upstream in our project.
          </p>
          <div className={styles.flexGroup}>
            <div className={styles.projectButton}>Visit Elastic.co</div>
          </div>
        </div>

        <div className={styles.projectRight}>
          <div className={styles.spacerExtraLarge} />
          <div className={styles.spacerMedium} />
          <img
            src='/assets/images/projects/cloud-screenshot.png'
            alt='cloud screenshot'
            className={styles.leadImage}
          />
        </div>
      </div>

      <div className={styles.spacerExtraLarge} />
      <div className={styles.divideHorizontal} />
      <div className={styles.spacerExtraLarge} />

      <div className={styles.project}>
        <div className={styles.projectLeft}>
          <h2 className={styles.projectHeadline}>LPL Financial</h2>
          <p>
            I spent nearly two years at LPL, who are the largest independent
            broker/dealer in the United States and provide support and services
            to over 16,000 financial advisors.
          </p>
          <p>
            One of the most rewarding projects I worked on while there was
            leading design efforts on a 9 month project to integrate a single
            order entry trading system into our flagship financial advisor
            platform, ClientWorks. In November 2016, it was successfully rolled
            out to 15,000 financial advisor to unanimously positive feedback.
          </p>
        </div>

        <div className={styles.projectRight}>
          <div className={styles.spacerExtraLarge} />
          <div className={styles.spacerMedium} />
          <img
            src='/assets/images/projects/lpl-screenshot2.png'
            alt='screenshot finance'
            className={styles.leadImage}
          />
        </div>
      </div>

      <div className={styles.spacerExtraLarge} />
      <div className={styles.divideHorizontal} />
      <div className={styles.spacerExtraLarge} />

      <div className={styles.project}>
        <div className={styles.projectLeft}>
          <h2 className={styles.projectHeadline}>GoHealth</h2>
          <p>
            GoHealth is a health insurance startup located in River North,
            Chicago. I was part of the core team that programmed and launched an
            online marketplace for health insurance on October 1st 2013, making
            GoHealth one of the first companies to do so when President
            Obama&lsquo;s health care law came into effect. In addition to our
            own product, we also provided white labelled services to some of the
            largest companies in the United States.
          </p>
          <p>
            Originally, I was part of the team that established, then outlined
            the User Experience for the project. Once development started my
            role was to guide front-end interactive design and development. That
            role entailed creating, maintaining and scaling stylesheets, coding
            page templates and creating directives to handle behaviour for any
            advanced UI functionality required. The GoHealth Health Insurance
            Exchange Marketplace can be found at GoHealthInsurance.com .
          </p>
          <p>
            Technologies Used: AngularJS, Grails, Grunt, HTML, SCSS, PhantomJS
          </p>
        </div>

        <div className={styles.projectRight}>
          <div className={styles.spacerExtraLarge} />
          <div className={styles.spacerMedium} />
          <img
            src='/assets/images/projects/gohealth-screenshot.png'
            alt='introduction-photo'
            className={styles.leadImage}
          />
        </div>
      </div>

      <div className={styles.spacerExtraLarge} />
      <div className={styles.divideHorizontal} />
      <div className={styles.spacerExtraLarge} />

      <div className={styles.project}>
        <div className={styles.projectLeft}>
          <h2 className={styles.projectHeadline}>Corkings</h2>
          <p>
            Corkings is an ongoing side project of mine. One of my personal
            passions is wine, so I decided to combine that with my passion for
            web development and create an online wine community. With Corkings,
            wine enthusiasts can discover, review and share wines, as well as
            follow what their friends are drinking.
          </p>
          <p>
            The site has been through many iterations and took me about a
            year&lsquo;s work, evenings and weekends, to get it to the point
            it&lsquo;s at today, a robust and reliable web application. As I
            found out, there are many different many different facets to
            building a social networking site, from logins, passwords and
            storing user information securely, to designing an experience that
            is informative without being overwhelming, friendly without being
            juvenile. It has been, and continues to be a great learning
            experience for myself.
          </p>
          <p>
            I&lsquo;m currently working on an iOS companion to make it easier to
            add wines while you&lsquo;re on the go. Corkings can be found at
            Corkings.com .
          </p>
          <p>Technologies Used: Ruby, Rails, HAML, SCSS, Postgres, RSpec</p>
        </div>

        <div className={styles.projectRight}>
          <div className={styles.spacerExtraLarge} />
          <div className={styles.spacerMedium} />
          <img
            src='/assets/images/projects/corkings-screenshot.png'
            alt='introduction-photo'
            className={styles.leadImageAlt}
          />
        </div>
      </div>

      <div className={styles.spacerExtraLarge} />
      <div className={styles.divideHorizontal} />
      <div className={styles.spacerExtraLarge} />

      <div className={styles.project}>
        <div className={styles.projectLeft}>
          <h2 className={styles.projectHeadline}>WarmlyYours Inc</h2>
          <p>
            WarmlyYours is a company located in the northern suburbs of Chicago
            specializing in Radiant Heating Systems. Their flagship product is
            their Floor Heating Systems, but they are also known for their
            outdoor radiant heating, snow melting systems and LAVA® Heating
            Panels.
          </p>
          <p>
            I arrived at WarmlyYours as an intern and spent an enjoyable 7 years
            of my life there. By the time I left I was accountable for the web
            site design and development, as well as the interaction and
            usability. My role also stretched to working alongside the graphic
            designer to ensure that the branding voice of the company was
            present throughout our materials regardless of the medium.
          </p>
          <p>
            During my time at WarmlyYours we were responsible for rolling out an
            industry first online shopping cart and a Ruby-based, Customer
            Relationship Management system. The WarmlyYours site can be found at
            WarmlyYours.com . Technologies Used: HTML, SCSS, jQuery
          </p>
        </div>

        <div className={styles.projectRight}>
          <div className={styles.spacerExtraLarge} />
          <div className={styles.spacerMedium} />
          <img
            src='/assets/images/projects/wy-screenshot.png'
            alt='introduction-photo'
            className={styles.leadImage}
          />
        </div>
      </div>
    </Page>
  )
}
