import getPostEntries from './getPostEntries'
import { PostParsed } from './postParser'

export default async function getAllPostsWithSlug(): Promise<PostParsed[]> {
  const entries = await getPostEntries({
    query: {
      select: 'fields.slug',
    },
  })

  return entries
}
