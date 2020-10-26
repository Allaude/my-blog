import MoreStories from 'components/more-stories'
import HeroPost from 'components/hero-post'
import Layout from 'components/modules/Layout/Layout'
import Head from 'next/head'
import { ReactElement } from 'react'
import { PostParsed } from 'services/contentful/post/postParser'

import { CMS_NAME } from 'lib/constants'

type BlogHomePageProps = {
  preview: boolean
  allPosts: PostParsed[]
}

export default function BlogHomePage({
  preview,
  allPosts,
}: BlogHomePageProps): ReactElement {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)

  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Blog | {CMS_NAME}</title>
        </Head>
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.coverImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        )}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Layout>
    </>
  )
}
