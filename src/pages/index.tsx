import { Fragment, useMemo, useState } from 'react'
import { graphql, PageProps } from 'gatsby'
import Layout from '@components/Common/Layout'
import Introduction from '@components/Main/Introduction'
import Category from '@components/Main/Category'
import PostList from '@components/Main/PostList'

export default function Index({
  data: {
    allContentfulPost: { nodes },
  },
}: PageProps<Queries.IndexPageQuery>) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')

  const categories = useMemo(
    () =>
      nodes.reduce<Record<string, number>>(
        (categories, post) => {
          post.category
            ?.filter((category): category is string => !!category)
            .forEach(
              category =>
                (categories[category] = (categories[category] ?? 0) + 1),
            )

          return categories
        },
        { All: nodes.length },
      ),
    [nodes],
  )

  const posts = useMemo(
    () =>
      nodes.filter(
        ({ category }) =>
          selectedCategory === 'All' || category?.includes(selectedCategory),
      ),
    [nodes, selectedCategory],
  )

  const handleSelectCategory = (category: string) =>
    setSelectedCategory(category)

  return (
    <Layout>
      <Introduction />
      <Category
        categories={categories}
        selectedCategory={selectedCategory}
        handleSelect={handleSelectCategory}
      />
      <PostList posts={posts} />
    </Layout>
  )
}

export function Head({ data: { site } }: PageProps<Queries.IndexPageQuery>) {
  const { title, siteUrl, description, thunbmail } = useMemo(
    () => ({
      title: site?.siteMetadata?.title ?? undefined,
      siteUrl: site?.siteMetadata?.siteUrl ?? undefined,
      description: site?.siteMetadata?.description ?? undefined,
      thunbmail: site?.siteMetadata?.image ?? undefined,
    }),
    [site],
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
      <meta property="og:image" content={thunbmail} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:site_name" content={title} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={thunbmail} />
      <meta name="twitter:site" content="@사용자이름" />
      <meta name="twitter:creator" content="@사용자이름" />
    </Fragment>
  )
}

export const query = graphql`
  query IndexPage {
    site {
      siteMetadata {
        title
        siteUrl
        description
        image
      }
    }
    allContentfulPost(sort: { date: DESC }) {
      nodes {
        title
        date(formatString: "YYYY.MM.DD.")
        category
        thumbnail {
          gatsbyImageData(width: 500)
        }
        description {
          description
        }
        slug
      }
    }
  }
`
