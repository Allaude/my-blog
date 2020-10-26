import { ReactElement } from 'react'
import Head from 'next/head'

import PostMoreEntries from 'components/modules/PostMoreEntries/PostMoreEntries'
import PostHero from 'components/modules/PostHero/PostHero'
import Layout from 'components/modules/Layout/Layout'
import { PostParsed } from 'services/contentful/post/postParser'

type BlogHomePageProps = {
  preview: boolean
  allPosts: PostParsed[]
}

export default function BlogHomePage({
  preview,
  allPosts,
}: BlogHomePageProps): ReactElement {
  const [postHero, ...postMoreEntries] = allPosts

  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Blog | Lorenzo GM</title>
        </Head>
        {postHero && <PostHero post={postHero} />}
        {postMoreEntries.length > 0 && (
          <PostMoreEntries posts={postMoreEntries} />
        )}
      </Layout>
    </>
  )
}
