import cn from 'classnames'
import Link from 'next/link'
import { ReactElement } from 'react'
import { PostParsed } from 'services/contentful/post/postParser'

type CoverImageProps = {
  post: PostParsed
}
export default function CoverImage({ post }: CoverImageProps): ReactElement {
  const image = (
    <img
      src={post.coverImage.url}
      alt={post.title}
      className={cn('shadow-small w-full', {
        'hover:shadow-medium transition-shadow duration-200': !!post.slug,
      })}
    />
  )
  return (
    <div className="sm:mx-0">
      {post.slug ? (
        <Link as={`/blog/${post.slug}`} href="/blog/[slug]">
          <a aria-label={post.title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
