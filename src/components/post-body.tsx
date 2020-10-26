import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { ReactElement } from 'react'
import markdownStyles from './markdown-styles.module.css'

export default function PostBody({ content }): ReactElement {
  return (
    <div className="max-w-2xl mx-auto">
      <div className={markdownStyles['markdown']}>
        {documentToReactComponents(content)}
      </div>
    </div>
  )
}
