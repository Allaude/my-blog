import { ReactElement, ReactNode } from 'react'

import Alert from 'components/elements/Alert/Alert'
import PageContainer from 'components/foundations/PageContainer/PageContainer'
import Meta from 'components/modules/Layout/Meta'

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
        <PageContainer>
          <main>{children}</main>
        </PageContainer>
      </div>
      <Footer />
    </>
  )
}
