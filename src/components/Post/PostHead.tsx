import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import styled from '@emotion/styled'

type PostHeadProps = {
  thumbnail: IGatsbyImageData
} & Pick<Queries.PostItemQuery['contentfulPost'], 'title' | 'category' | 'date'>

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: hidden;
  width: 1000px;
  height: 520px;
  padding: 50px;
  border-radius: 20px;

  @media (max-width: 767px) {
    width: 100%;
    height: auto;
    padding: 30px;
  }
`

const Title = styled.div`
  width: 70%;
  margin-bottom: 20px;
  font-size: 30px;
  font-weight: 700;
  color: #ffffff;

  @media (max-width: 767px) {
    font-size: 24px;
  }
`

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  font-size: 15px;
  font-weight: 100;
  color: #ffffff;

  @media (max-width: 767px) {
    font-size: 13px;
  }
`

const Line = styled.div`
  width: 100%;
  height: 1px;
  background: #ffffff;
`

const Thumbnail = styled(GatsbyImage)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.9) 100%
    );
  }
`

export default function PostHead({
  thumbnail,
  title,
  category,
  date,
}: PostHeadProps) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Info>
        <div>{category.map(item => `#${item}`).join(' ')}</div>
        <div>{date}</div>
      </Info>
      <Line />

      <Thumbnail image={thumbnail} alt="Thumbnail Image" />
    </Wrapper>
  )
}
