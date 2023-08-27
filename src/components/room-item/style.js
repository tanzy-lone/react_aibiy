import styled from 'styled-components'

export const RoomItemWrapper = styled.div`
  width: ${(props) => props.width};
  user-select: none;
  padding: 5px 8px;

  .inner-img {
    position: relative;
    /* 66.66%是相对于父元素宽度  */
    padding: 66.66% 8px 0;
    border-radius: 3px;
    overflow: hidden;
  }
  img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .slider {
    cursor: pointer;
    position: relative;
    &:hover {
      .control {
        display: flex;
      }
    }
    .favor {
      position: absolute;
      right: 10px;
      top: 10px;
      color: red;
      z-index: 8;
      font-weight: 900;
    }
    .list {
      position: absolute;
      bottom: 10px;
      left: 0;
      right: 0;
      width: 30%;
      margin: 0 auto;
      z-index: 99;
      .indicator-list {
        display: flex;
        width: 14.29%;
        justify-content: center;
        align-items: center;

        .item {
          width: 6px;
          height: 6px;
          margin: 5px 3px;
          border-radius: 50%;
          background-color: #ccc;
          transition: background-color 0.3s ease;
          &.active {
            background-color: #fff;
            height: 8px;
            width: 8px;
          }
        }
      }
    }
    .control {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: none;
      justify-content: space-between;
      color: #fff;
      /* z-index: 1; */
      /* pointer-events: none; */
      .btn {
        position: relative;
        z-index: 3;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 100%;
        background-image: linear-gradient(
          to left,
          transparent 0%,
          rgba(0, 0, 0, 0.25) 100%
        );
        &.right {
          background-image: linear-gradient(
            to right,
            transparent 0%,
            rgba(0, 0, 0, 0.25) 100%
          );
        }
      }
    }
    .swiper {
      position: relative;
      z-index: 2;
    }
  }

  .desc {
    color: ${(props) => props.verifyColor};
  }
  .name {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;

    margin: 8px 0;
  }
  .bottom {
    margin-top: 5px;
    font-size: 12px;
    color: ${(props) => props.theme.primary};
    .MuiRating-sizeSmall {
      .MuiRating-icon {
        margin-right: -2px;
      }
    }
    .count {
      margin: 0 3px;
    }
    .price {
      margin: 5px 0;
    }
  }
`
