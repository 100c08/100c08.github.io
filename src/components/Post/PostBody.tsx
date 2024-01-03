import styled from '@emotion/styled'
import TableOfContents from './TableOfContents'
import useRenderRichText from '@hooks/useRenderRichText'

type PostBodyProps = {
  content: Queries.ContentfulPostContent
}

const Wrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 220px;
  grid-gap: 30px;
  justify-content: space-between;
  align-items: flex-start;
  padding: 100px 0;
`

export default function PostBody({ content }: PostBodyProps) {
  const richText = useRenderRichText(content)

  return (
    <Wrapper>
      <div id="content">{richText}</div>
      <TableOfContents content={content} />
    </Wrapper>
  )
}
