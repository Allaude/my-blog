import { ReactElement } from 'react'
import { AuthorParsed } from 'services/contentful/author/authorParser'

type AvatarProps = {
  author: AuthorParsed
}
export default function Avatar({ author }: AvatarProps): ReactElement {
  return (
    <div className="flex items-center">
      <img
        src={author.picture.url}
        className="w-12 h-12 rounded-full mr-4"
        alt={author.name}
      />
      <div className="text-xl font-bold">{author.name}</div>
    </div>
  )
}
