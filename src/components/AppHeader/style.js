import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  border-bottom: 1px solid #666;
  border-bottom-color: ${(props) =>
    props.theme.isAlpha ? 'rgba(233,233,233,0)' : 'rgba(233,233,233,1)'};
  /* border-bottom: 1px solid #333; */
  transition: border-bottom-width 150ms ease;
  &.fixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: ${(props) =>
      props.theme.isAlpha ? 'rgba(255,255,255,0)' : '#fff'};
    z-index: 999;
  }
  .wrapper {
    position: relative;
    z-index: 10;
    .content {
      display: flex;
      align-items: center;
      height: 80px;
      background-color: ${(props) =>
        props.theme.isAlpha ? 'rgba(255,255,255,0)' : '#fff'};
    }
  }
  .cover {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.3);
    /* z-index: 10; */
  }
`
export const SectionWrapper = styled.div`
  height: ${(props) => (props.isSearch ? '100px' : '0')};
  background-color: ${(props) =>
    props.theme.isAlpha ? 'rgba(255,255,255,0)' : '#fff'};
  transition: height 250ms ease;
  overflow: hidden;
`
