import styled from 'styled-components'

export const SearchTabsWrapper = styled.div`
  .tabs-list {
    display: flex;
    align-items: center;
    font-size: 16px;
    .tab {
      margin: 0 5px;
      padding: 12px 5px;
      cursor: pointer;
      user-select: none;
      color: #ddd;
      display: flex;
      position: relative;
      color: ${(props) => (props.theme.isAlpha ? '#ddd' : '#666')};
      &.active {
        color: ${(props) => (props.theme.isAlpha ? '#fff' : 'gray')};
        transition: color 200ms ease;

        &::after {
          transform: scale(1);
          transform-origin: bottom center;
        }
      }
      &::after {
        content: '';
        position: absolute;
        bottom: 2px;
        left: 0;
        right: 0;
        height: 2px;
        transform: scale(0);
        transform-origin: bottom;
        background-color: currentcolor;
        transition: transform 0.3s cubic-bezier(0.2, 0, 0, 1);
      }
    }
  }
`
