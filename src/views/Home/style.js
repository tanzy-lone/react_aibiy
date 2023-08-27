import styled from 'styled-components'

export const HomeWrapper = styled.div`
  .content {
    max-width: 1080px;
    margin: 0 auto;
    padding: 20px 0 0 15px;
  }
  .inner-img {
    position: relative;
    overflow: hidden;
    padding: 66.66% 8px 0;
    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
  }
`
