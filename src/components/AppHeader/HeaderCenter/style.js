import styled from 'styled-components'

export const CenterWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: 48px;
  .search-wrapper {
    position: absolute;
    display: flex;
    justify-content: space-between;
    width: 300px;
    height: 48px;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 20px;
    padding: 0 10px 0 24px;
    ${(props) => props.theme.mixin.boxShadow}
    font-size: 14px;
    font-weight: 600;
    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 8px;
      border-radius: 50%;
      color: #fff;
      background-color: ${(props) => props.theme.color.primary};
    }
  }
  .tabs {
    position: relative;
    will-change: transform opacity;
    transform-origin: 50% 0;

    .search-area {
      position: absolute;
      top: 60px;
      left: 50%;
      transform: translateX(-50%);

      background-color: ${(props) =>
        props.theme.isAlpha ? 'rgba(255,255,255,0)' : '#fff'};
    }
  }
  .bar-enter {
    opacity: 0;
    transform: scale(2.85714, 1.375) translateY(58px);
  }
  .bar-enter-active {
    opacity: 1;
    transform: scale(1) translateY(0);
    transition: all 150ms ease;
  }
  .bar-exit {
    opacity: 0;
  }
  .tabs-section-enter {
    opacity: 0;
    transform: scale(0.35, 0.727273) translateY(-58px);
  }
  .tabs-section-enter-active {
    transform: scale(1) translateY(0);
    transition: all 150ms ease;
    opacity: 1;
  }
  .tabs-section-exit {
    transform: scale(1) translateY(0);
    opacity: 1;
  }
  .tabs-section-exit-active {
    transition: all 150ms ease;
    transform: scale(0.35, 0.727273) translateY(-58px);
    opacity: 0;
  }
`
