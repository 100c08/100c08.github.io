import { HTMLAttributes, ReactNode } from 'react'
import styled from 'styled-components'

type CodeProps = {
  isBlock?: boolean
  children: ReactNode
} & HTMLAttributes<HTMLElement>

const InlineCode = styled.code`
  padding: 2px 5px;
  border-radius: 3px;
  font-family: 'Nanum Gothic Coding', monospace;
  background: #f1f3f5;
`

const BlockCode = styled.pre`
  & * {
    font-family: 'Nanum Gothic Coding', monospace !important;
  }
`

export default function Code({
  isBlock = false,
  children,
  ...props
}: CodeProps) {
  if (!isBlock) return <InlineCode {...props}>{children}</InlineCode>
  else
    return (
      <BlockCode>
        <code {...props}>{children}</code>
      </BlockCode>
    )
}
