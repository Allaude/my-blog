import getPostEntries from 'services/contentful/post/getPostEntries'
import { PostParsed } from './postParser'

export default async function getAllPostsForHome(
  preview: boolean,
): Promise<PostParsed[]> {
  const entries = await getPostEntries({
    preview,
    query: {
      order: '-fields.date',
    },
  })

  return entries
}
