import styled from 'styled-components'

export const ScrollWrapper = styled.div`
  .view {
    position: relative;
    .arrow-left,
    .arrow-right {
      position: absolute;
      top: 50%;
      transform: translate(0, -50%);
      color: #000;
      border-radius: 50%;
      border: 1px solid #ddd;
      padding: 5px;
      background: rgba(255, 255, 255, 0.6);
      cursor: pointer;
      box-shadow: 0 2px 4px rgba(255, 255, 255, 0.7);
      z-index: 12;
    }
    .box {
      overflow: hidden;
      .children {
        display: flex;
        transition: all 250ms ease;
      }
    }
    .arrow-right {
      right: -5px;
    }
    .arrow-left {
      left: -5px;
    }
  }
`
