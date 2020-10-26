import { GetStaticPaths, GetStaticProps } from 'next'
import BlogPostTemplate from 'components/templates/BlogPostTemplate/BlogPostTemplate'
import getAllPostsWithSlug from 'services/contentful/post/getAllPostsWithSlug'
import getPostAndMorePosts from 'services/contentful/post/getPostAndMorePosts'

export default BlogPostTemplate

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
}) => {
  const data = await getPostAndMorePosts(params?.slug, preview)

  return {
    props: {
      preview,
      post: data?.post ?? null,
      morePosts: data?.morePosts ?? null,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await getAllPostsWithSlug()

  return {
    paths: allPosts.map(({ slug }) => `/blog/${slug}`) ?? [],
    fallback: true,
  }
}
