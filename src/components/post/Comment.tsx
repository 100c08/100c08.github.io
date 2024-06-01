import { useEffect, useRef } from 'react'

const ATTRIBUTES = {
  src: 'https://utteranc.es/client.js',
  repo: 'ji5485/gatsby-blog-dev-tutorial-v2',
  'issue-term': 'pathname',
  label: 'Comment',
  theme: `github-light`,
  crossorigin: 'anonymous',
  async: 'true',
}

export default function Comment() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current === null) return

    const utterances: HTMLScriptElement = document.createElement('script')

    Object.entries(ATTRIBUTES).forEach(([key, value]) =>
      utterances.setAttribute(key, value),
    )

    ref.current?.appendChild(utterances)

    return () => {
      if (ref.current?.hasChildNodes())
        ref.current.removeChild(ref.current.childNodes[0])
    }
  }, [])

  return <div ref={ref} />
}
