import Link from 'next/link'
import { ReactElement } from 'react'

import DateFormat from 'components/foundations/DateFormat/DateFormat'
import PostCoverImage from 'components/elements/PostCoverImage/PostCoverImage'
import { PostParsed } from 'services/contentful/post/postParser'

type PostPreviewProps = {
  post: PostParsed
}

export default function PostPreview({ post }: PostPreviewProps): ReactElement {
  return (
    <div>
      <div className="mb-5">
        <PostCoverImage post={post} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link as={`/blog/${post.slug}`} href="/blog/[slug]">
          <a className="hover:underline">{post.title}</a>
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <DateFormat dateString={post.date} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{post.excerpt}</p>
    </div>
  )
}
