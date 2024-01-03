import { createElement } from 'react'
import slugify from 'slugify'
import {
  ContentfulRichTextGatsbyReference,
  renderRichText,
} from 'gatsby-source-contentful/rich-text'
import { NodeRenderer, Options } from '@contentful/rich-text-react-renderer'
import { BLOCKS, Text } from '@contentful/rich-text-types'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const HEADERS = [
  BLOCKS.HEADING_1,
  BLOCKS.HEADING_2,
  BLOCKS.HEADING_3,
  BLOCKS.HEADING_4,
  BLOCKS.HEADING_5,
  BLOCKS.HEADING_6,
]

const options: Options = {
  renderNode: {
    ...HEADERS.reduce<{ [block: string]: NodeRenderer }>((nodes, header) => {
      nodes[header] = (node, children) => {
        const type = `h${header.charAt(header.length - 1)}`
        const id = slugify((node.content[0] as Text).value)

        return createElement(type, { id }, children)
      }

      return nodes
    }, {}),
    [BLOCKS.EMBEDDED_ASSET]: node => {
      const { gatsbyImageData, description } = node.data.target
      const image = getImage(gatsbyImageData)

      if (image) return <GatsbyImage image={image} alt={description} />
    },
  },
}

export default function useRenderRichText({
  raw,
  references,
}: Queries.ContentfulPostContent) {
  if (!raw) return null

  return renderRichText(
    {
      raw,
      references: references as unknown as ContentfulRichTextGatsbyReference[],
    },
    options,
  )
}
