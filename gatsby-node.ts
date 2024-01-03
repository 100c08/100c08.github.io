import { GatsbyNode } from 'gatsby'

export const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] =
  ({ actions: { createTypes } }) => {
    createTypes(`
      type PostItemQuery {
        contentfulPost: ContentfulPostItem!
      }

      type ContentfulPostItem {
        title: String!
        thumbnail: PostThumbnail!
        category: [String]!
        date: String!
        content: ContentfulPostContent!
      }

      type PostThumbnail {
        gatsbyImageData: GatsbyImageData!
      }

      type ContentfulContent {
        raw: String!
      }
    `)
  }
