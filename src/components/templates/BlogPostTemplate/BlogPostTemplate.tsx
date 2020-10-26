import { useRouter } from 'next/router'
import Head from 'next/head'
import ErrorPage from 'next/error'
import { ReactElement } from 'react'

import PostBody from 'components/modules/PostBody/PostBody'
import PostMoreEntries from 'components/modules/PostMoreEntries/PostMoreEntries'
import PostHeader from 'components/modules/PostHeader/PostHeader'
import SectionSeparator from 'components/section-separator'
import Layout from 'components/modules/Layout/Layout'
import PostTitle from 'components/elements/PostTitle/PostTitle'
import { PostParsed } from 'services/contentful/post/postParser'

type BlogPostPageProps = {
  preview: boolean
  post: PostParsed
  morePosts: PostParsed[]
}

export default function BlogPostTemplate({
  post,
  morePosts,
  preview,
}: BlogPostPageProps): ReactElement {
  const router = useRouter()

  if (!router.isFallback && !post) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout preview={preview}>
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <>
          <article>
            <Head>
              <title>{post.title} | Lorenzo GM</title>
              <meta property="og:image" content={post.coverImage.url} />
            </Head>
            <PostHeader post={post} />
            <PostBody post={post} />
          </article>
          <SectionSeparator />
          {morePosts && morePosts.length > 0 && (
            <PostMoreEntries posts={morePosts} />
          )}
        </>
      )}
    </Layout>
  )
}
