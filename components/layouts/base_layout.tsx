import React, { Fragment, Component } from 'react'
import Head from 'next/head'
import Navigation from '../navigation'
import Footer from '../footer'

import styles from '@styles/modules/base.module.scss'

type Props = {
  title: string
  description: string
  smallHeadline: string
  largeHeadline: string
  largeHeadline2?: string
  profileImage?: boolean
}

export default class Page extends Component<Props> {
  render() {
    const {
      title,
      description,
      smallHeadline,
      largeHeadline,
      largeHeadline2,
      profileImage,
    } = this.props

    let pageHeadline
    let headerContent

    if (largeHeadline2) {
      pageHeadline = (
        <Fragment>
          {largeHeadline}
          <br /> {largeHeadline2}
        </Fragment>
      )
    } else {
      pageHeadline = <Fragment>{largeHeadline}</Fragment>
    }

    if (profileImage) {
      headerContent = (
        <Fragment>
          <div className={styles.flexGroupHeadline}>
            <div className={styles.flexItemHeadlineImage}>
              <img
                src='/assets/images/gareth-colour.jpg'
                alt='Gareth ap Dafydd'
                className={styles.profileImage}
              />
            </div>
            <div className={styles.flexItemHeadlineText}>
              <h2 className={styles.smallHeadline}>{smallHeadline}</h2>
              <h1 className={styles.largeHeadline}>{pageHeadline}</h1>
            </div>
          </div>
        </Fragment>
      )
    } else {
      headerContent = (
        <Fragment>
          <h2 className={styles.smallHeadline}>{smallHeadline}</h2>
          <h1 className={styles.largeHeadline}>{pageHeadline}</h1>
        </Fragment>
      )
    }

    return (
      <Fragment>
        <Head>
          <title>{title}</title>
          <meta name='description' content={description}></meta>
        </Head>

        <main className={styles.container}>
          <div className={styles.main}>
            <Navigation />

            {headerContent}

            <div className={styles.horizontalDivide} />
            {this.props.children}
          </div>
          <Footer />
        </main>
      </Fragment>
    )
  }
}
