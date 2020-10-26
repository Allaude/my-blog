import Link from 'next/link'
import { ReactElement } from 'react'

export default function Navigation(): ReactElement {
  return (
    <nav>
      <ul className="flex space-x-6">
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <a href="https://github.com/lorenzogm">Github</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/lorenzogm/">LinkedIn</a>
        </li>
      </ul>
    </nav>
  )
}
