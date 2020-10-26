import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { ReactElement } from 'react'

import { PostParsed } from 'services/contentful/post/postParser'
import markdownStyles from './markdown-styles.module.css'

type PostBodyProps = {
  post: PostParsed
}
export default function PostBody({ post }: PostBodyProps): ReactElement {
  return (
    <div className="max-w-2xl mx-auto">
      <div className={markdownStyles.markdown}>
        {documentToReactComponents(post.content)}
      </div>
    </div>
  )
}
