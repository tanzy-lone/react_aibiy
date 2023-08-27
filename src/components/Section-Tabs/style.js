import styled from 'styled-components'

export const TabsWrapper = styled.div`
  /* display: flex; */
  margin: 8px 0;
  flex-wrap: nowrap;
  .item {
    padding: 12px 16px;
    white-space: nowrap;
    flex-basis: 120px;
    flex-shrink: 0;
    margin-right: 17px;
    font-size: 17px;
    border: 1px solid #d8d8d8;
    text-align: center;
    color: ${(props) => props.theme.color.textColor};
    ${(props) => props.theme.mixin.boxShadow}
    border-radius: 8px;
    cursor: pointer;
    &:last-of-type {
      margin-right: 0;
    }
    &.active {
      background-color: ${(props) => props.theme.color.secondary};
      color: #fff;
    }
  }
`
