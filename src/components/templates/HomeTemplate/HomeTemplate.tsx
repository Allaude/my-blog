import Layout from 'components/modules/Layout/Layout'
import Head from 'next/head'
import { ReactElement } from 'react'

import { CMS_NAME } from 'lib/constants'
import Link from 'next/link'

type HomeTemplateProps = {
  preview: boolean
}

export default function HomeTemplate({
  preview,
}: HomeTemplateProps): ReactElement {
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Blog | {CMS_NAME}</title>
        </Head>

        <div className="container mx-auto mt-20 px-20 flex justify-center">
          <div className="mr-20 mt-5">
            <p className="text-4xl">Hello! I'm Lorenzo GM.</p>
            <p className="text-2xl">I make stuff with code.</p>
            <div className="mt-6">
              <Link href="/blog">
                <a
                  aria-label="blog"
                  className="bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
                >
                  Visit the Blog
                </a>
              </Link>
            </div>
          </div>
          <img
            src="/lorenzogm-square.jpg"
            alt="Lorenzo GM"
            className="rounded-full w-48"
          />
        </div>
      </Layout>
    </>
  )
}
