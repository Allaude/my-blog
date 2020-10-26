import { Asset, Entry } from 'contentful'
import { IPostFields } from 'types/generated/contentful'
import authorParser, { AuthorParsed } from '../author/authorParser'
import imageParser from '../image/imageParser'

export type PostParsed = Omit<IPostFields, 'coverImage' | 'author'> & {
  coverImage: Asset['fields']['file']
} & { author: AuthorParsed }

export default function postParser({ fields }: Entry<IPostFields>): PostParsed {
  return {
    title: fields.title,
    slug: fields.slug,
    date: fields.date,
    content: fields.content,
    excerpt: fields.excerpt,
    coverImage: imageParser(fields.coverImage),
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    author: authorParser(fields.author),
  }
}
