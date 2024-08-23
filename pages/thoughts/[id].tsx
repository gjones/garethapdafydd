import React from 'react'
import { getAllPostIds, getPostData } from '../../lib/posts'
import PostPage from '@layouts/post_layout'
import Date from '../../components/utils/date'

interface Props {
  postData: any
  params: any
}

export default function Post(props: Props): React.ReactElement {
  return (
    <PostPage
      title={props.postData.title}
      description={props.postData.description}
      largeHeadline={props.postData.title}
      canonicalUrl={`thoughts/${props.postData.id}`}
      socialImage={
        props.postData.socialImage
          ? props.postData.socialImage
          : '/assets/images/social-base.png'
      }
    >
      <br />
      <Date dateString={props.postData.date} />
      <br />
      <div dangerouslySetInnerHTML={{ __html: props.postData.contentHtml }} />
    </PostPage>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }: { params: any }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData,
    },
  }
}
