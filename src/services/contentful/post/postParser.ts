import { Asset, Entry } from 'contentful'
import { IAuthor, IPostFields } from 'types/generated/contentful'
import authorParser, { AuthorParsed } from '../author/authorParser'
import imageParser from '../image/imageParser'

export type PostParsed =
  | IPostFields
  | { coverImage: Asset['fields']['file'] }
  | { author: AuthorParsed }

export default function postParser({ fields }: Entry<IPostFields>): PostParsed {
  return {
    title: fields.title,
    slug: fields.slug,
    date: fields.date,
    content: fields.content,
    excerpt: fields.excerpt,
    coverImage: fields.coverImage ? imageParser(fields.coverImage) : undefined,
    author: fields.author ? authorParser(fields.author as IAuthor) : {},
  }
}
