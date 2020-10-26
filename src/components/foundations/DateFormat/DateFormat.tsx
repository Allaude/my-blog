import { format } from 'date-fns'
import { ReactElement } from 'react'

type DateFormatProps = {
  dateString: string
}
export default function DateFormat({
  dateString,
}: DateFormatProps): ReactElement {
  return (
    <time dateTime={dateString}>
      {format(new Date(dateString), 'LLLL	d, yyyy')}
    </time>
  )
}
