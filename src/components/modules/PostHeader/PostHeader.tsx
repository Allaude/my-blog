import { ReactElement } from 'react'

import Avatar from 'components/elements/Avatar/Avatar'
import DateFormat from 'components/foundations/DateFormat/DateFormat'
import PostCoverImage from 'components/elements/PostCoverImage/PostCoverImage'
import PostTitle from 'components/elements/PostTitle/PostTitle'
import { PostParsed } from 'services/contentful/post/postParser'

type PostHeaderProps = {
  post: PostParsed
}
export default function PostHeader({ post }: PostHeaderProps): ReactElement {
  return (
    <>
      <PostTitle>{post.title}</PostTitle>
      <div className="hidden md:block md:mb-12">
        {post.author && <Avatar author={post.author} />}
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <PostCoverImage post={post} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          {post.author && <Avatar author={post.author} />}
        </div>
        <div className="mb-6 text-lg">
          <DateFormat dateString={post.date} />
        </div>
      </div>
    </>
  )
}
