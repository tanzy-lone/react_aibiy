import styled from 'styled-components'

export const PictureBrowserWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  z-index: 999;
  background-color: #000;
  .top {
    height: 50px;
    color: #666;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 20px 5px;
    box-sizing: content-box;
    .iconfont {
      text-align: right;
      font-size: 40px;
      margin-right: 40px;
      cursor: pointer;
    }
  }
  .main {
    flex: 1;
    position: relative;
    .control {
      position: absolute;
      top: 0;
      left: 20px;
      right: 20px;
      bottom: 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: #fff;
      z-index: 10;
      .btn {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 83px;
        height: 100%;
        cursor: pointer;
      }
    }
    .picture {
      position: relative;
      width: 100%;
      height: 100%;
      overflow: hidden;
      max-width: 105vh;
      margin: 0 auto;
      user-select: none;
      img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 100%;
      }
      .slide-enter {
        opacity: 0;
        transform: translateX(${(props) => (props.isNext ? '100%' : '-100%')});
      }
      .slide-enter-active {
        opacity: 1;
        transform: translateX(0);
        transition: all 200ms ease;
      }
      .slide-leave {
        opacity: 1;
      }
      .slide-leave-active {
        opacity: 0;
        transition: opacity 200ms ease;
      }
    }
  }
  .preview {
    margin-top: 20px;
    height: 100px;
    position: relative;
    .info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 105vh;
      height: 20px;
      line-height: 20px;
      color: #fff;
      margin: 0 auto;
      .desc {
        display: flex;
        align-items: center;
        font-size: 12px;
        .num {
          margin-right: 8px;
        }
      }
      .show-list {
        display: flex;
        align-items: center;
        font-size: 12px;
        cursor: pointer;
        .iconfont {
          margin-left: 5px;
        }
      }
    }

    .list {
      position: absolute;
      bottom: 0px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      flex-shrink: 0;
      flex-wrap: nowrap;
      max-width: 105vh;
      overflow: hidden;
      margin: 5px auto;
      cursor: pointer;
      height: ${(props) => (props.isShowList ? '67px' : '0')};
      transition: height 200ms ease;
      .item-list {
        margin: 0 5px;
        img {
          height: 67px;
          opacity: 0.5;
        }
        &.active {
          img {
            opacity: 1;
          }
        }
      }
    }
  }
`
