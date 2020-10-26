import { format } from 'date-fns'
import { ReactElement } from 'react'

export default function DateComponent({ dateString }): ReactElement {
  return (
    <time dateTime={dateString}>
      {format(new Date(dateString), 'LLLL	d, yyyy')}
    </time>
  )
}
