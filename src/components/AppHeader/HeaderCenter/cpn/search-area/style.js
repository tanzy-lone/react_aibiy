import styled from 'styled-components'

export const SearchAreaWrapper = styled.div`
  .wrap {
    display: flex;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 36px;
    width: 850px;
    background-color: ${(props) => (props.theme.isAlpha ? '#fff' : '')};
    .wrap-item {
      display: flex;
      flex: 1;
      width: 100%;
      border-radius: 36px;
      position: relative;
      .item {
        display: flex;
        flex: 1;
        flex-direction: column;
        position: relative;
        padding: 15px 68px;
        color: #666;
        .top {
          font-size: 12px;
          font-weight: 600;
        }
        .bottom {
          margin-top: 3px;
          padding: 3px 0;
        }
      }
      &::after {
        content: '';
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        height: 50%;
        width: 2px;
        background-color: #ddd;
      }
      &:last-child::after {
        display: none;
      }
      &:hover {
        background-color: ${(props) =>
          props.theme.isAlpha ? ' rgba(255,255,255,.5)' : '#eee'};
      }
    }
  }
`
