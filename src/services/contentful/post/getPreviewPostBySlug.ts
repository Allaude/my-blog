import getPostEntries from './getPostEntries'
import { PostParsed } from './postParser'

export default async function getPreviewPostBySlug(
  slug: string,
): Promise<PostParsed> {
  const [entry] = await getPostEntries({
    preview: true,
    query: {
      limit: 1,
      'fields.slug[in]': slug,
    },
  })

  return entry
}
