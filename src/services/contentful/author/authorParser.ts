import { Asset } from 'contentful'
import { IAuthor, IAuthorFields } from 'types/generated/contentful'
import imageParser from '../image/imageParser'

export type AuthorParsed = IAuthorFields | { picture: Asset['fields']['file'] }
type ParseAuthorProps = IAuthor
export default function authorParser({
  fields,
}: ParseAuthorProps): AuthorParsed {
  return {
    name: fields.name,
    picture: imageParser(fields.picture as Asset),
  }
}
