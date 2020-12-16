import React, { Component } from 'react'
import Page from '@layouts/base_layout'

import styles from '@styles/modules/posts.module.scss'

type Props = {
  title: string
  description: string
  largeHeadline: string
  children: any
}

export default class PostPage extends Component<Props> {
  render() {
    return (
      <Page
        title={this.props.title}
        description={this.props.description}
        smallHeadline='Thoughts &amp; Musings'
        largeHeadline={this.props.title}>
        <div className={styles.postContainer}>{this.props.children}</div>
      </Page>
    )
  }
}
