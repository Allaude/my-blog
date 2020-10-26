import { useRouter } from 'next/router'
import Head from 'next/head'
import ErrorPage from 'next/error'
import Container from 'components/foundations/PageContainer/PageContainer'
import PostBody from 'components/post-body'
import MoreStories from 'components/more-stories'
import Header from 'components/header'
import PostHeader from 'components/post-header'
import SectionSeparator from 'components/section-separator'
import Layout from 'components/modules/Layout/Layout'
import PostTitle from 'components/post-title'
import { PostParsed } from 'services/contentful/post/postParser'
import { ReactElement } from 'react'

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
            <PostHeader
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
            />
            <PostBody content={post.content} />
          </article>
          <SectionSeparator />
          {morePosts && morePosts.length > 0 && (
            <MoreStories posts={morePosts} />
          )}
        </>
      )}
    </Layout>
  )
}
