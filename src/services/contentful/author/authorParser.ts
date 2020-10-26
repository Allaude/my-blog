import { Asset, Entry } from 'contentful'
import { IAuthorFields } from 'types/generated/contentful'
import imageParser from '../image/imageParser'

export type AuthorParsed = Omit<IAuthorFields, 'picture'> & {
  picture: Asset['fields']['file']
}
type ParseAuthorProps = Entry<IAuthorFields>
export default function authorParser({
  fields,
}: ParseAuthorProps): AuthorParsed {
  return {
    name: fields.name,
    picture: imageParser(fields.picture),
  }
}
