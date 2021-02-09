import { ReactElement } from 'react'
import Head from 'next/head'

import PostMoreEntries from 'components/modules/PostMoreEntries/PostMoreEntries'
import PostHero from 'components/modules/PostHero/PostHero'
import Layout from 'components/modules/Layout/Layout'
import { PostParsed } from 'services/contentful/post/postParser'
import PostPreview from 'components/modules/PostPreview/PostPreview'

type BlogHomePageProps = {
  preview: boolean
  allPosts: PostParsed[]
}

export default function BlogHomePage({
  preview,
  allPosts,
}: BlogHomePageProps): ReactElement {
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Blog | Muhamad Riyan</title>
        </Head>
        <div className="p-10 grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5">
          {allPosts.map((post) => (
            <PostPreview post={post} key={post.title} />
          ))}
        </div>
      </Layout>
    </>
  )
}
