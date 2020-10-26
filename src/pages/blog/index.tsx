import { GetStaticProps } from 'next'

import BlogHomePage from 'components/templates/BlogHomeTemplate/BlogHomeTemplate'

import getAllPostsForHome from 'services/contentful/post/getAllPostsForHome'

export default BlogHomePage

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllPostsForHome(preview)

  return {
    props: { preview, allPosts },
  }
}
