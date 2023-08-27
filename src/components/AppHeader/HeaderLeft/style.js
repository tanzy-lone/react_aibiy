import styled from 'styled-components'

export const LeftWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  margin-left: 24px;
  .logo {
    cursor: pointer;
  }
  /* color: var(--primaryColor); */
  color: ${(props) =>
    props.theme.isAlpha ? '#fff' : props.theme.color.primary};
  transition: color 150ms ease;
`
