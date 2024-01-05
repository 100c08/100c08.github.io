import styled from '@emotion/styled'

const Wrapper = styled.footer`
  display: grid;
  place-items: center;
  margin-top: auto;
  padding: 50px 0;
  font-size: 15px;
  text-align: center;
  line-height: 1.5;

  @media (max-width: 1199px) {
    font-size: 13px;
  }
`

export default function Footer() {
  return (
    <Wrapper>
      Thank You for Visiting My Blog
      <br />
      Have a Good Day 😆
    </Wrapper>
  )
}
