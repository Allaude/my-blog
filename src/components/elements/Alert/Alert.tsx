import Container from 'components/foundations/PageContainer/PageContainer'
import cn from 'classnames'
import { ReactElement } from 'react'

type AlertProps = {
  preview: boolean
}
export default function Alert({ preview }: AlertProps): ReactElement | null {
  return preview ? (
    <div
      className={cn('border-b', {
        'bg-accent-7 border-accent-7 text-white': !!preview,
        'bg-accent-1 border-accent-2': !preview,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm">
          <>
            This is page is a preview.{' '}
            <a
              href="/api/exit-preview"
              className="underline hover:text-cyan duration-200 transition-colors"
            >
              Click here
            </a>{' '}
            to exit preview mode.
          </>
        </div>
      </Container>
    </div>
  ) : null
}
