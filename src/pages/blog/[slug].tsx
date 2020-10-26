import { GetStaticPaths, GetStaticProps } from 'next'

import BlogPostTemplate from 'components/templates/BlogPostTemplate/BlogPostTemplate'
import getPostAndMorePosts from 'services/contentful/post/getPostAndMorePosts'
import { IPostFields } from 'types/generated/contentful'
import getClient from 'services/contentful/contentful'
import { EntryCollection } from 'contentful'

export default BlogPostTemplate

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
}) => {
  const data = await getPostAndMorePosts(params?.slug as string, preview)

  return {
    props: {
      preview,
      post: data?.post ?? null,
      morePosts: data?.morePosts ?? null,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const entries: EntryCollection<Pick<IPostFields, 'slug'>> = await getClient(
    false,
  ).getEntries({
    content_type: 'post',
    select: 'fields.slug',
  })

  return {
    paths: entries.items.map(({ fields }) => `/blog/${fields.slug}`) ?? [],
    fallback: true,
  }
}
