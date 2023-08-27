import styled from 'styled-components'

export const RoomWrapper = styled.div`
  padding: 15px 0;
  position: relative;
  margin-top: 65px;
  .title {
    margin: 18px 0;
    padding: 0 8px;
  }
  .list {
    display: flex;
    flex-wrap: wrap;
  }
  .cover {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.8);
    z-index: 999;
  }
`
