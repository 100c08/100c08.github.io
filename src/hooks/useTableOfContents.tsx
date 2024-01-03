import { useState, useMemo, useEffect } from 'react'
import slugify from 'slugify'

type ContentType = {
  content: {
    content: {
      data: unknown
      marks: unknown
      nodeType: string
      value: string
    }[]
    nodeType: string
  }[]
  nodeType: string
}

export default function useTableOfContents(rawContent: string) {
  const [activeId, setActiveId] = useState<string | null>(null)

  const toc = useMemo(() => {
    const { content } = JSON.parse(rawContent) as ContentType
    const headers = content.filter(item => item.nodeType.startsWith('heading-'))
    const minDepth = Math.min(
      ...headers.map(({ nodeType }) =>
        parseInt(nodeType.charAt(nodeType.length - 1)),
      ),
    )

    return headers.map(({ nodeType, content }) => {
      const title = content[0].value
      const id = slugify(title)
      const depth = parseInt(nodeType.charAt(nodeType.length - 1)) - minDepth

      return { id, title, depth }
    })
  }, [rawContent])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const intersecting = entries.filter(
          ({ isIntersecting, boundingClientRect: { top } }) =>
            isIntersecting && top < 0,
        )

        setActiveId(prevId => {
          if (intersecting.length > 0) return intersecting[0].target.id
          else if (toc.findIndex(({ id }) => id === prevId) === 0) return null
          else return prevId
        })
      },
      { threshold: [0, 1] },
    )

    document
      .querySelectorAll('#content > h1, h2, h3, h4, h5, h6')
      .forEach(element => observer.observe(element))

    return () => observer.disconnect()
  }, [toc])

  return { toc, activeId }
}
