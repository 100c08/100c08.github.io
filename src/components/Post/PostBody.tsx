import styled from '@emotion/styled'
import TableOfContents from './TableOfContents'
import useRenderRichText from '@hooks/useRenderRichText'

type PostBodyProps = {
  content: Queries.ContentfulPostContent
}

const Content = styled.div`
  font-size: 14px;
  color: #100c08;

  @media (max-width: 1199px) {
    font-size: 9px;
  }
`

const Wrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 220px;
  grid-gap: 30px;
  justify-content: space-between;
  align-items: flex-start;
  padding: 100px 0;

  @media (max-width: 1199px) {
    grid-template-columns: 1fr;
  }
`

export default function PostBody({ content }: PostBodyProps) {
  const richText = useRenderRichText(content)

  return (
    <Wrapper>
      <Content>{richText}</Content>
      <TableOfContents content={content} />
    </Wrapper>
  )
}
