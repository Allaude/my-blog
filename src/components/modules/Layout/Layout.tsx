import Alert from 'components/alert'
import Container from 'components/foundations/PageContainer/PageContainer'
import Meta from 'components/meta'
import { ReactElement, ReactNode } from 'react'

import Header from './Header'
import Footer from './Footer'

type LayoutProps = {
  preview: boolean
  children: ReactNode
}
export default function Layout({
  preview,
  children,
}: LayoutProps): ReactElement {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Alert preview={preview} />
        <Header />
        <Container>
          <main>{children}</main>
        </Container>
      </div>
      <Footer />
    </>
  )
}
