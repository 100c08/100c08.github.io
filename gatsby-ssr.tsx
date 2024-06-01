import { GatsbySSR } from 'gatsby'
import Layout from './src/components/common/Layout'

const HeadComponents = [
  <link
    rel="stylesheet"
    as="style"
    crossOrigin="anonymous"
    href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
    key="pretendard-font"
  />,
  <link
    rel="preconnect"
    href="https://fonts.googleapis.com"
    key="nanum-gothic-1"
  />,
  <link
    rel="preconnect"
    href="https://fonts.gstatic.com"
    crossOrigin="anonymous"
    key="nanum-gothic-2"
  />,
  <link
    href="https://fonts.googleapis.com/css2?family=Nanum+Gothic+Coding&display=swap"
    rel="stylesheet"
    key="nanum-gothic-3"
  />,
]

export const onRenderBody: GatsbySSR['onRenderBody'] = ({
  setHeadComponents,
}) => {
  setHeadComponents(HeadComponents)
}

export const wrapPageElement: GatsbySSR['wrapPageElement'] = ({
  element,
  props,
}) => {
  return <Layout {...props}>{element}</Layout>
}
