import styled from 'styled-components'

export const LongItemWrapper = styled.div`
  width: 20%;
  flex-shrink: 0;
  position: relative;
  padding: 0 8px;
  .wrap {
    position: relative;
    z-index: 11;
    border-radius: 5px;
    overflow: hidden;
  }
  .item {
    position: relative;
    .pic {
      width: 100%;
      height: 100%;
    }
    .cover {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: 60%;
      background-image: linear-gradient(
        -180deg,
        rgba(0, 0, 0, 0) 3%,
        rgb(0, 0, 0) 100%
      );
    }
    .info {
      position: absolute;
      left: 50%;
      top: 76%;
      transform: translate(-50%, 0);
      color: #fff;
      text-align: center;
      font-size: 14px;
      .item-name {
        margin-bottom: 8px;
        font-size: 16px;
        font-weight: 700;
      }
    }
  }
`
