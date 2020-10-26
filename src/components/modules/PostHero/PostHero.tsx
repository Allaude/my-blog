import Link from 'next/link'
import DateFormat from 'components/foundations/DateFormat/DateFormat'
import PostCoverImage from 'components/elements/PostCoverImage/PostCoverImage'
import { ReactElement } from 'react'
import { PostParsed } from 'services/contentful/post/postParser'

type PostHeroProps = {
  post: PostParsed
}

export default function PostHero({ post }: PostHeroProps): ReactElement {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <PostCoverImage post={post} />
      </div>
      <div className="md:grid md:grid-cols-2 md:col-gap-16 lg:col-gap-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
            <Link as={`/blog/${post.slug}`} href="/blog/[slug]">
              <a className="hover:underline">{post.title}</a>
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <DateFormat dateString={post.date} />
          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{post.excerpt}</p>
        </div>
      </div>
    </section>
  )
}
