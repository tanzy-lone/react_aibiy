import styled from 'styled-components'
import coverImg from '@/assets/img/home/cover_01.jpeg'

export const BannersWrapper = styled.div`
  .banners {
    width: 100%;
    height: 529px;
    background: url(${coverImg}) center/cover;
    /* background: url(${require('@/assets/img/home/cover_01.jpeg')}) center/cover; */
  }
`
