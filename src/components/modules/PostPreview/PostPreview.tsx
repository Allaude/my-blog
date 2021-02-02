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
    <div className="rounded overflow-hidden shadow-lg">
      <PostCoverImage post={post} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          <Link as={`/blog/${post.slug}`} href="/blog/[slug]">
            <a className="hover:underline">{post.title}</a>
          </Link>{' '}
        </div>
        <p className="text-gray-700 text-base">
          <Link as={`/blog/${post.slug}`} href="/blog/[slug]">
            <a className="hover:underline">{post.excerpt}</a>
          </Link>
        </p>
        <div className="text-lg mb-4">
          <DateFormat dateString={post.date} />
        </div>
      </div>
      {/* <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #photography
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #travel
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #fall
        </span>
      </div> */}
    </div>
  )
}
