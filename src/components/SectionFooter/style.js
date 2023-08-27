import styled from 'styled-components'

export const FooterWrapper = styled.div`
  display: flex;
  margin-top: 10px;
  color: ${(props) => props.color};
  .more {
    display: flex;
    align-items: center;
    cursor: pointer;
    .text {
      margin-right: 5px;
    }
    .icon {
      position: relative;
      font-size: 12px;
    }
    &:hover {
      text-decoration: underline;
    }
  }
`
