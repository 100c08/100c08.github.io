import { graphql, PageProps } from 'gatsby'
import Layout from '@components/Common/Layout'
import PostHead from '@components/Post/PostHead'
import Contents from '@components/Post/PostBody'
import Comment from '@components/Post/Comment'
import { Fragment, useMemo } from 'react'
import { IGatsbyImageData } from 'gatsby-plugin-image'

export default function Post({
  data: { contentfulPost },
}: PageProps<Queries.PostPageQuery>) {
  return (
    <Layout>
      <PostHead
        thumbnail={
          contentfulPost?.thumbnail?.gatsbyImageData as IGatsbyImageData
        }
        title={contentfulPost?.title as string}
        category={contentfulPost?.category as string[]}
        date={contentfulPost?.date as string}
      />
      <Contents
        content={contentfulPost?.content as Queries.ContentfulPostContent}
      />
      <Comment />
    </Layout>
  )
}

export function Head({
  data: { site, contentfulPost },
  params: { slug },
}: PageProps<Queries.PostPageQuery>) {
  const { title, description, thumbnail, siteUrl } = useMemo(
    () => ({
      title: contentfulPost?.title ?? undefined,
      description: contentfulPost?.description?.description ?? undefined,
      thumbnail: contentfulPost?.thumbnail?.publicUrl ?? undefined,
      siteUrl: `${site?.siteMetadata?.siteUrl}/${slug}`,
    }),
    [site, contentfulPost, slug],
  )

  return (
    <Fragment>
      <title>{title}</title>

      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={thumbnail} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:site_name" content={title} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={thumbnail} />
      <meta name="twitter:site" content="@사용자이름" />
      <meta name="twitter:creator" content="@사용자이름" />
    </Fragment>
  )
}

export const query = graphql`
  query PostPage($id: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    contentfulPost(id: { eq: $id }) {
      title
      thumbnail {
        publicUrl
        gatsbyImageData(width: 1000)
      }
      category
      date
      description {
        description
      }
      content {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            title
            description
            gatsbyImageData(width: 768)
            __typename
          }
        }
      }
    }
  }
`
