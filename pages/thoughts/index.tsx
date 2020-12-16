import React from 'react'
import Link from 'next/link'
import Page from '@layouts/base_layout'
import Date from '../../components/date'
import { getSortedPostsData } from 'lib/posts'

import styles from '@styles/modules/lists.module.scss'

type Props = {
  allPostsData: any
}

export default class Thoughts extends React.Component<Props> {
  render() {
    return (
      <Page
        title='Thoughts &amp; Musings | Gareth ap Dafydd'
        description='Some thoughts and musings | Gareth ap Dafydd'
        smallHeadline='Thoughts &amp; Musings'
        largeHeadline='I barely tweet, so don’t expect much in the way of blog posts'>
        <ul className={styles.list}>
          {this.props.allPostsData.map(({ id, date, title, abstract }: any) => (
            <li className={styles.listItem} key={id}>
              <Link href={`/thoughts/${id}`}>
                <div className={styles.blogPost}>
                  <a>
                    <h4 className={styles.dateHeadline}>
                      <Date dateString={date} />
                    </h4>
                    <h2 className={styles.blogHeadline}>{title}</h2>
                    <p className={styles.blogAbstract}>{abstract}</p>

                    <div className={styles.flexGroup}>
                      <div className={styles.blogButton}>Read post</div>
                    </div>
                  </a>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Page>
    )
  }
}
export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}
