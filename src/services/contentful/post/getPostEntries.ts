import { EntryCollection } from 'contentful'
import getClient from 'services/contentful/contentful'
import postParser, { PostParsed } from 'services/contentful/post/postParser'
import { IPostFields } from 'types/generated/contentful'

type GetPostEntries = {
  query:
    | {
        order?: string
        limit?: number
        select?: string
      }
    | { [key: string]: string }
  preview?: boolean
}
export default async function getPostEntries({
  query,
  preview = false,
}: GetPostEntries): Promise<PostParsed[]> {
  const entries: EntryCollection<IPostFields> = await getClient(
    preview,
  ).getEntries({
    content_type: 'post',
    ...query,
  })

  return entries.items.map(postParser)
}
