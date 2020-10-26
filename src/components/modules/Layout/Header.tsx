import Navigation from 'components/elements/Navigation/Navigation'
import Container from 'components/foundations/PageContainer/PageContainer'
import Link from 'next/link'
import { ReactElement } from 'react'

export default function Header(): ReactElement {
  return (
    <Container>
      <header className="flex flex-col lg:flex-row justify-between items-center py-6">
        <Link href="/">
          <a className="font-bold text-4xl">Lorenzo GM</a>
        </Link>
        <Navigation />
      </header>
    </Container>
  )
}
