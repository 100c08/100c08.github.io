import { ReactNode } from 'react'
import styled from '@emotion/styled'
import { Global, css } from '@emotion/react'
import Header from './Header'
import Footer from './Footer'

type LayoutProps = {
  children: ReactNode
}

const globalStyle = css`
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/static/pretendard.css');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Pretendard';
  }

  html,
  body,
  #___gatsby,
  #gatsby-focus-wrapper {
    min-height: 100%;
    height: 100%;
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 1000px;
  min-height: 100%;
  margin: 0 auto;

  @media (max-width: 1199px) {
    width: 100%;
    padding: 0 20px;
  }
`

const Contents = styled.div`
  margin: 80px 0;
`

export default function Layout({ children }: LayoutProps) {
  return (
    <Wrapper>
      <Global styles={globalStyle} />

      <Header />
      <Contents>{children}</Contents>
      <Footer />
    </Wrapper>
  )
}
