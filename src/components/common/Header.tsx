import styled from 'styled-components'
import { Link } from 'gatsby'
import { AiFillGithub, AiOutlineInstagram } from 'react-icons/ai'
import { SiNaver } from 'react-icons/si'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;

  @media (max-width: 768px) {
    height: 60px;
  }
`

const Title = styled(Link)`
  font-size: 15px;
  font-weight: 700;
  text-decoration: none;
  color: inherit;
`

const Menu = styled.div`
  display: flex;
  gap: 15px;
  font-size: 25px;

  & > a {
    display: flex;
    color: initial;
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }
`

const NaverIcon = styled(SiNaver)`
  transform: scale(0.8);
`

export default function Header() {
  return (
    <Wrapper>
      <Title to="/">Developer 100c08</Title>
      <Menu>
        <a href="https://github.com/100c08" target="_blank" rel="noreferrer">
          <AiFillGithub />
        </a>
        <a
          href="https://www.instagram.com/_100c08"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineInstagram />
        </a>
        <a
          href="https://blog.naver.com/100c08"
          target="_blank"
          rel="noreferrer"
        >
          <NaverIcon />
        </a>
      </Menu>
    </Wrapper>
  )
}
