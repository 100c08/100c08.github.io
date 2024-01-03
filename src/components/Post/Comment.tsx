import { useEffect, useRef } from 'react'
import styled from '@emotion/styled'

const ATTRIBUTES = {
  src: 'https://utteranc.es/client.js',
  repo: 'ji5485/Gatsby-Blog-Dev-Tutorial-V2',
  'issue-term': 'pathname',
  label: 'Comment',
  theme: `github-light`,
  crossorigin: 'anonymous',
  async: 'true',
}

const Wrapper = styled.div`
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`

export default function Comment() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current === null) return

    const utterances: HTMLScriptElement = document.createElement('script')

    Object.entries(ATTRIBUTES).forEach(([key, value]) => {
      utterances.setAttribute(key, value)
    })

    ref.current?.appendChild(utterances)
  }, [])

  return <Wrapper ref={ref} />
}
