import styled from 'styled-components'

export const HousePictureWrapper = styled.div`
  /* position: relative; */
  overflow: hidden;
  display: flex;
  height: 600px;
  user-select: none;
  .picture {
    display: flex;
    position: absolute;
    top: 200px;
    left: 0;
    right: 0;
  }
  .show-btn {
    position: absolute;
    right: 50px;
    bottom: 20px;
    padding: 12px 19px;
    color: #fff;
    border-radius: 8px;
    cursor: pointer;
    background-color: #ffce2a;
    box-shadow: 5px 3px 5px rgba(0, 0, 0, 0.8);
    z-index: 10;
  }
  .left,
  .right {
    width: 50%;
    height: 100%;

    .item {
      height: 100%;
      overflow: hidden;
      cursor: pointer;
      position: relative;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;

        transition: transform 0.3s ease-in;
      }
      .cover {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.4);
        z-index: 10;
        height: 100%;
        opacity: 0;
        transition: opacity 200ms ease;
      }

      &:hover {
        img {
          transform: scale(1.1);
        }
        .cover {
          opacity: 1;
        }
      }
    }
  }

  .right {
    display: flex;
    flex-wrap: wrap;

    .item {
      width: 50%;
      height: 50%;
      box-sizing: border-box;
      border: 1px solid #ffce2a;
    }
  }
`
