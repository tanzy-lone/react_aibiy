import styled from 'styled-components'

export const FilterWrapper = styled.div`
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  background-color: #fff;
  height: 48px;
  .item {
    margin: 0 8px;
    color: #484848;
    border: 1px solid #dec0e0;
    padding: 8px 12px;
    border-radius: 5px;
    user-select: none;
    &:last-of-type {
      margin: 0;
    }
    &.active {
      background-color: #008489;
      border: 1px solid #008489;
      color: #fff;
    }
  }
`
