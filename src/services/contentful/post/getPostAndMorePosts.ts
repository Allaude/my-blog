import getPostEntries from './getPostEntries'
import { PostParsed } from './postParser'

export default async function getPostAndMorePosts(
  slug: string,
  preview: boolean,
): Promise<{ post: PostParsed; morePosts: PostParsed[] }> {
  const [entry] = await getPostEntries({
    preview,
    query: {
      limit: 1,
      'fields.slug[in]': slug,
    },
  })

  const entries = await getPostEntries({
    preview,
    query: {
      limit: 2,
      order: '-fields.date',
      'fields.slug[nin]': slug,
    },
  })

  return {
    post: entry,
    morePosts: entries,
  }
}
