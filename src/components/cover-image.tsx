import cn from 'classnames'
import Link from 'next/link'
import { ReactElement } from 'react'

export default function CoverImage({ title, url, slug }): ReactElement {
  const image = (
    <img
      src={url}
      alt={`Cover Image for ${title}`}
      className={cn('shadow-small w-full', {
        'hover:shadow-medium transition-shadow duration-200': slug,
      })}
    />
  )
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/blog/${slug}`} href="/blog/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
