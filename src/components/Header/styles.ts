import styled from 'styled-components'

import BGCover from '../../assets/cover.svg'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 296px;
  background: url(${BGCover}) no-repeat content-box;
  background-size: cover;

  display: flex;
  align-items: flex-start;
  justify-content: center;

  img {
    max-width: 148px;
    margin-top: 4rem;
  }
`
