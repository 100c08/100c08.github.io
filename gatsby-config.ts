import type { GatsbyConfig } from 'gatsby'

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Developer 100c08`,
    siteUrl: `https://100c08.github.io`,
    description: 'Welcome to my Gatsby Blog!',
    image: '/thumbnail.jpeg',
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        accessToken: 'Y23WCP38OGVMmrjJXRsgCX6BGKkmiSHzATEYrLnDmjw',
        spaceId: '17xqye0lv1jl',
      },
    },
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        defaults: {
          formats: ['webp'],
          placeholder: 'blurred',
          quality: 80,
        },
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-emotion',
    // 'gatsby-plugin-google-gtag',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-mdx',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    'gatsby-plugin-tsconfig-paths',
  ],
}

export default config
