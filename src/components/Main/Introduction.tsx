import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { StaticImage } from 'gatsby-plugin-image'

const profileImageStyle = css`
  width: 140px;
  height: 140px;
  margin-bottom: 30px;
  border-radius: 50%;
`

const SubText = styled.div`
  font-size: 30px;
  font-weight: 100;
`

const MainText = styled.div`
  font-size: 40px;
  font-weight: 700;
`

export default function Introduction() {
  return (
    <div>
      <StaticImage
        src="../../images/profile-image.jpeg"
        alt="Profile Image"
        css={profileImageStyle}
      />

      <SubText>Nice to meet you!</SubText>
      <MainText>I&apos;m Aspiring Developer Damien</MainText>
    </div>
  )
}
